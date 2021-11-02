import React from "react";



const WeatherRows = (props) => {
  return (
    < >
<div className ="columns is-mobile is-justify-content-space-around has-text-weight-light is-flex-wrap-wrap has-text-centered has-text-light">

<div className="column is-3  p-3">
 <p className=" is-size-5">Humidity:</p>
<p className="  is-size-4">{props.humidity}%</p>
  </div>

  <div className="column is-3  p-3 ">
  <p className=" is-size-5">Cloudiness:</p>
<p className=" is-size-5">{props.clouds_all}%</p>
  </div>

  <div className="column is-3  ">
  <p className="is-size-5">Feels like:</p>
  <p className=" is-size-4">{props.feels_like} °F</p>
  </div>
<div className="column is-3  ">
  <p className="is-size-5">Feels like:</p>
  <p className=" is-size-4">{props.feels_like} °F</p>
  </div>

<div className="column is-3  ">
<p className="is-size-5">Temp Max:</p>
<p className=" is-size-5">{props.temp_max} °F</p>
  </div>

  <div className="column is-3  ">
  <p className="is-size-5">Temp Min:</p>
  <p className=" is-size-5">{props.temp_min} °F</p>
  </div>

  <div className="column is-3  ">
  <p className="is-size-5">Sunset:</p>
<p className=" is-size-5">{props.sunset}</p>
  </div>

  <div className="column is-3  ">
  <p className=" is-size-5">Sunrise:</p>
<p className=" is-size-5">{props.sunrise}</p>
  </div>

</div>
    </>
  );
};
export default WeatherRows;