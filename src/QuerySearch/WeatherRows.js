import React from "react";



const WeatherRows = (props) => {
  return (
    < >
<div className ="columns is-mobile is-justify-content-space-around has-text-weight-light is-flex-wrap-wrap has-text-centered has-text-light">

<div className="column is-3  p-3">
 <p className=" is-size-6">Humidity:</p>
<p className="  is-size-6">{props.humidity}%</p>
  </div>

  <div className="column is-3  p-3 ">
  <p className=" is-size-6">Cloudiness:</p>
<p className=" is-size-6">{props.clouds_all}%</p>
  </div>

  <div className="column is-3  ">
  <p className="is-size-6">Feels like:</p>
  <p className=" is-size-6">{props.feels_like} °F</p>
  </div>
<div className="column is-3  ">
  <p className="is-size-6">Feels like:</p>
  <p className=" is-size-6">{props.feels_like} °F</p>
  </div>

<div className="column is-3  ">
<p className="is-size-6">Temp Max:</p>
<p className=" is-size-6">{props.temp_max} °F</p>
  </div>

  <div className="column is-3  ">
  <p className="is-size-6">Temp Min:</p>
  <p className=" is-size-6">{props.temp_min} °F</p>
  </div>

  <div className="column is-3  ">
  <p className="is-size-6">Sunset:</p>
<p className=" is-size-6">{props.sunset}</p>
  </div>

  <div className="column is-3  ">
  <p className=" is-size-6">Sunrise:</p>
<p className=" is-size-6">{props.sunrise}</p>
  </div>

</div>
    </>
  );
};
export default WeatherRows;