import React from "react";


const WeatherIcons= (props) => {
  return (
    < >
 <div className="column is-pulled-left"  >

    <img className="has-text-primary "  src={`http://openweathermap.org/img/wn/${props.weather_icon}@2x.png`}
style={{height:"150px"}}
alt='weather icons' >
</img>

<p className=" title is-6
 has-text-weight-light has-text-white ">{props.description}</p>

  </div>

    </>
  );
};
export default WeatherIcons;