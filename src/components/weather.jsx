import React from "react";
const Weather = props => {
  return (
    <div className="row weather-details">
      <div className="divider"></div>
      {props.country && props.city && (
        <p>
          Location: {props.city}, {props.country}
        </p>
      )}
      <div className="divider"></div>
      {props.temperature && <p>Temperature: {props.temperature}</p>}
      <div className="divider"></div>
      {props.humidity && <p>Humidity: {props.humidity}</p>}
      <div className="divider"></div>
      {props.description && <p>Conditions: {props.description}</p>}
      <div className="divider"></div>

      {props.error && (
        <div className="alert alert-danger" role="alert">
          <p className="alert-link">{props.error}</p>
        </div>
      )}
    </div>
  );
};
export default Weather;
