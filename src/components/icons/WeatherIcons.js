import React from "react";


const WeatherIcons= (props) => {
  return (
    < >
<div>


<div className="ml-4">
<figure className="image is-128x128 ">
<img src={`http://openweathermap.org/img/wn/${props.weather_icon}@2x.png`}
alt='weather icons' >
</img>
</figure>
</div>


<p className=" title is-4
 has-text-weight-light has-text-white  ml-5">{props.description}
 </p>
</div>

    </>
  );
};
export default WeatherIcons;