import React from "react";
const Form = props => {
  return (
    <div className="row">
      <form className="form-horizontal" onSubmit={props.loadWeather}>
        <div className="form-group">
          <label htmlFor="city" className="col-sm-2 control-label color-white">
            City
          </label>
          <div className="col-sm-10">
            <input
              name="city"
              type="text"
              className="form-control"
              id="city"
              placeholder="City"
            />
          </div>
        </div>
        <div className="form-group">
          <label
            htmlFor="country"
            className="col-sm-2 control-label color-white"
          >
            Country
          </label>
          <div className="col-sm-10">
            <input
              name="country"
              type="text"
              className="form-control"
              id="country"
              placeholder="Country"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button className="btn btn-info">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;
