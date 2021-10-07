import React from "react";



const WeatherList = (props) => {
  return (
    < >
<div className="columns  has-text-white has-text-weight-light
has-text-weight-light
   is-mobile ">

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
export default WeatherList;