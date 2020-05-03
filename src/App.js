import React, { Component } from 'react';
import Titles from './components/titles';
import Form from './components/forms';
import Weather from './components/weather';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { async } from 'q';

const Api_Key = "1cf45c746782ad52d1f7aeafe8bc7204";
class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }


  getWeather = async (e) => {

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();


    const weatherAPI = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);

    const response = await weatherAPI.json();
    if (city && country) {
      if (response.cod === 200) {
        this.setState({
          temperature: response.main.temp,
          city: response.name,
          country: response.sys.country,
          humidity: response.main.humidity,
          description: response.weather[0].description,
          error: ""
        })
      }
      else {
        this.setState({
          temperature: "",
          city: "",
          country: "",
          humidity: "",
          description: "",
          error: "Sorry we could not find the results for mentioned city and country!"
        })
      }
    }

    else {
      this.setState({
        error: "Please enter the values!"
      })
    }


    console.log(response);
  }

  render() {
    return (
      <div className="container-fluid container-bg">
        <div className="col-xs-6 col-xs-offset-3 weather-container">
          <Titles />
          <Form loadWeather={this.getWeather} />
          <Weather temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error} />
        </div>
      </div>
    )
  }
}

export default App;
