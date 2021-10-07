import React from "react";
import Thumbnail from './WeatherIcon';
import WeatherList from './WeatherList1'
import WeatherList2 from './WeatherList2'



var moment = require('moment');



const Main= (props) => {







  return (  <div className="column">

<p className="has-text-weight-light has-text-white is-size-3 subtitle ">
{moment.utc(props.dt).format('ll').toUpperCase()}
</p>

  <p class="title is-size-1  has-text-white ">
 {props.name}, {props.country}
</p>

<p className="subtitle  has-text-white">
    Population: {props.population}
    </p>


</div>

  );
};
export default Main;