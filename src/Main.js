import React from "react";
import Thumbnail from './WeatherIcon';
import WeatherList from './WeatherList'
import WeatherList2 from './WeatherList2'



var moment = require('moment');



const Main= (props) => {







  return (  <div className="container  " >


<section className="card is-small has-background-primary">


  <div className="hero-body">
  <div className="columns">

  <div className="column has-text-white has-text-centered-mobile  is-half">

  <p className="has-text-weight-light has-text-white is-size-3 subtitle ">
{moment.utc(props.dt).format('ll').toUpperCase()}
</p>

  <p class="title is-size-1  has-text-white ">
 {props.name}, {props.country}
</p>

<p className="subtitle  has-text-white">
    Population: {props.population}
    </p>




<div className="columns ">
  <div className="column ">

  <Thumbnail
{...props}

/>
<p className=" title has-text-white is-size-3  has-text-centered">{ props.description }</p>
  </div>
</div>
</div>


<div className="columns ">
<div className="column has-text-white has-text-centered-mobile ">
<WeatherList
{...props}
/>
<WeatherList2
{...props}
/>
</div>
</div>







  </div>


  </div>



</section>


</div>

  );
};
export default Main;