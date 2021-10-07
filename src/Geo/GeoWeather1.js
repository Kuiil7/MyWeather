import React from "react";


const GeoWeather1= (props) => {
  return (

    < >
<div className ="columns  is-mobile has-text-weight-light ">
  <div class="column">
  <p className=" is-size-6">
  Humidity:
    </p>
    <p className="  is-size-6">
 {props.humidity}%
    </p>
  </div>
  <div className ="column">
  <p className=" is-size-6 ">
  Cloudiness:
</p>
 <p className="  is-size-6 ">
  {props.clouds_all}%
</p>
  </div>
  <div className ="column">
  <p className=" is-size-6 ">
    Wind:
</p>
<p className="  is-size-6 ">
     {props.wind_speed}mph
</p>
  </div>
  <div className="column">
  <p className=" is-size-6 ">
Feels like:
    </p>
    <p className=" is-size-6 ">
 {props.feels_like}°F
    </p>
</div>
</div>

    </>
  );
};
export default GeoWeather1;