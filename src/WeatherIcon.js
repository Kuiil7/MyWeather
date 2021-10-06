import React from "react";



const WeatherIcon = (props) => {
  return (
    < >

<div className="columns has-text-centered ">
  <div className="column ">

<img className="has-content-centered has-text-primary "  src={`http://openweathermap.org/img/wn/${props.weather_icon}@2x.png`}
style={{height:"150px"}}
alt='weather icons' >
  </img>

  </div>
</div>


    </>
  );
};
export default WeatherIcon;