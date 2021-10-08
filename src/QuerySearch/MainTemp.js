import React from "react";
import WeatherIcons from "../Icons/WeatherIcons";

const moment = require('moment');

const MainTemp = (props) => {
  return (
  < >
<div className="columns is-mobile pl-3 ">



  <div className="column is-mobile is-inverted
  has-text-weight-light
   " >


 <div className="is-pulled-right mt-5">


 <p class="subtitle is-6  has-text-white  has-text-weight-light">
 {moment.utc(props.dt).format('ll')}
    </p>
    <p className="title is-4  has-text-weight-bold has-text-white   ">
    {props.name}, {props.country}
    </p>

    <p className="subtitle is-6 has-text-weight-light has-text-white ">
    Population: {props.population.toLocaleString()}    </p>

    <p className=" title is-size-2 mb-4-desktop has-text-white ">
{props.main_temp}°F
</p>


 </div>



  </div>

  <div className='column '>

<WeatherIcons
{...props}
/>
</div>


  </div>
    </>
  );
};
export default MainTemp;