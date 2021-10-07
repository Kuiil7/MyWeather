import React from "react";



const WeatherList1 = (props) => {
  return (
    < >
<div className="columns  has-text-white has-text-weight-light
has-text-weight-light
   is-mobile ">
  <div className="column  ">
  <p classNameName=" is-size-6">
  Humidity:
    </p>
    <p className="  is-size-6">
 {props.humidity}%
    </p>
  </div>

  <div className="column">
  <p className=" is-size-6 ">
  Cloudiness:
</p>
 <p className="  is-size-6 ">
  {props.clouds_all}%
</p>
  </div>
  <div className="column">
  <p className=" is-size-6 ">
    Wind:
</p>
<p className="  is-size-6 ">
     {props.wind_speed}mph
</p>
  </div>

  <div className="column">
  <p className="is-size-6 ">
Feels like:
    </p>
    <p className=" is-size-6 ">
 {props.feels_like}°F
    </p>
</div>

<div className="column">
<p className="is-size-6 ">
    Temp Max:
</p>
<p className=" is-size-6 ">
    {props.temp_max}°F
</p>
  </div>

  <div className="column">
  <p className="is-size-6 ">
       Temp Min:
    </p>
    <p className=" is-size-6 ">
      {props.temp_min}°F
    </p>
  </div>

  <div className="column">
  <p className="is-size-6 ">
Sunset:
</p>
<p className=" is-size-6 ">
{props.sunset}
</p>
  </div>

  <div className="column">
  <p className=" is-size-6 ">
 Sunrise:
</p>
<p className=" is-size-6 ">
 {props.sunrise}
</p>
  </div>
</div>


    </>
  );
};
export default WeatherList1;