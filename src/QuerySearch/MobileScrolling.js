import React from "react";



const MobileScrolling= (props) => {
  return (
    < >
    <p className='title is-3 has-text-weight-light has-text-white has-text-centered'>Five Day Forecast </p>

<div className ="columns 
is-mobile
has-text-centered
is-flex-wrap-nowrap
scrolling-wrapper
scrollbar-hidden
px-3
mt-2
mb-5
">

<div className="column  
card
mr-3
mb-5
">
<p className=" is-size-3" >{props.day_1_date }</p>

<div className="fade-in-image-two">
<img  src={`http://openweathermap.org/img/wn/${props.day_1_weather_icon}@2x.png`}  alt='weather icons' className="createBox" />
</div>

<p className=" is-size-7 has-text-weight-bold">{props.day_1_weather_description.toUpperCase() }</p>
<ul  >
<li className="is-size-4  " >{props.day_1_main_temp} °F</li>
<li>Humidity: {props.day_1_humidity}%</li>
<li> Wind: {props.day_1_wind_speed} mph</li>
<li>Gust: {props.day_1_wind_gust} mph</li>
</ul>
</div>

<div className="column 
mr-3
mb-5
 card">
<p className="is-size-3" >{props.day_2_date }</p>
<div className="fade-in-image-two">
<img  src={`http://openweathermap.org/img/wn/${props.day_2_weather_icon}@2x.png`}  alt='weather icons' />
</div>
<p className="is-size-7 has-text-weight-bold  ">{props.day_2_weather_description.toUpperCase() }</p>
<ul  >
<li className="is-size-4   " >{props.day_2_main_temp} °F</li>
<li>Humidity: {props.day_2_humidity}%</li>
<li> Wind: {props.day_2_wind_speed} mph</li>
<li>Gust: {props.day_2_wind_gust} mph</li>
</ul>
</div>

<div className="column 
mr-3 
card
mb-5
">

<p className="is-size-3" >{props.day_3_date }</p>
<div className="fade-in-image-two">
<img  src={`http://openweathermap.org/img/wn/${props.day_3_weather_icon}@2x.png`}  alt='weather icons' />
</div>
<p className="is-size-7 has-text-weight-bold  ">{props.day_3_weather_description.toUpperCase() }</p>
<ul  >
<li className="is-size-4  " >{props.day_3_main_temp} °F</li>
<li>Humidity: {props.day_3_humidity}%</li>
<li> Wind: {props.day_3_wind_speed} mph</li>
<li>Gust: {props.day_3_wind_gust} mph</li>
</ul>
</div>

<div className="column  
mr-3
card
mb-5">
<p className="is-size-3">{props.day_4_date }</p>
<div className="fade-in-image-two">
<div className="fade-in-image-two">
<img  src={`http://openweathermap.org/img/wn/${props.day_4_weather_icon}@2x.png`}  alt='weather icons' />
</div>
</div>
<p className="is-size-7 has-text-weight-bold  ">{props.day_4_weather_description.toUpperCase() }</p>
<ul  >
<li className="is-size-4  " >{props.day_4_main_temp} °F</li>
<li>Humidity: {props.day_4_humidity}%</li>
<li> Wind: {props.day_4_wind_speed} mph</li>
<li>Gust: {props.day_4_wind_gust} mph</li>
</ul>
</div>

<div className="column  
mr-3
card  
mb-5">
<p className="is-size-3" >{props.day_5_date }</p>
<div className="fade-in-image-two">
<img  src={`http://openweathermap.org/img/wn/${props.day_5_weather_icon}@2x.png`}  alt='weather icons' />
</div>
<p className="is-size-7 has-text-weight-bold  ">{props.day_5_weather_description.toUpperCase() }</p>
<ul  >
<li className="is-size-4  " >{props.day_5_main_temp} °F</li>
<li>Humidity: {props.day_5_humidity}%</li>
<li> Wind: {props.day_5_wind_speed} mph</li>
<li>Gust: {props.day_5_wind_gust} mph</li>
</ul>
</div>

</div>
    </>
  );
};
export default MobileScrolling;