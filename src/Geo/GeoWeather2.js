import React from "react";


const GeoWeather2= (props) => {
  return (
<>
<div className="columns  has-text-white  is-mobile ">


<div className="column">
<p className="has-text-weight-bold is-size-6 ">
    Temp Max:
</p>
<p className=" is-size-6 ">
    {props.temp_max}°F
</p>
  </div>

  <div className="column">
  <p className="has-text-weight-bold is-size-6 ">
       Temp Min:
    </p>
    <p className=" is-size-6 ">
      {props.temp_min}°F
    </p>
  </div>

  <div className="column">
  <p className="has-text-weight-bold is-size-6 ">
Sunset:
</p>
<p className=" is-size-6 ">
{props.sunset}
</p>
  </div>

  <div className="column">
  <p className=" has-text-weight-bold is-size-6 ">
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
export default GeoWeather2;