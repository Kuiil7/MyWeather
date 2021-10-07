import React from "react";


const MobileScrolling
 = (props) => {
  return (
    < >
<div className="
has-text-weight-light
columns
is-mobile
scrolling-wrapper
scrollbar-hidden
 ">
 <div className="column

is-6-mobile
is-3-tablet
is-2-widescreen
is-2-fullhd
is-2-desktop


"
>



  <div className="box ">

<div className="has-text-centered">

<p className=" has-text-primary">
{props.day_1_date }
</p>

 <img  src={`http://openweathermap.org/img/wn/${props.day_1_weather_icon}@2x.png`}  alt='weather icons' />


<p className="mb-3 has-text-primary ">{props.day_1_weather_description }</p>

</div>
<ul  className="has-text-primary ">
<li className="is-size-3 has-text-centered mt-3  " >
  {props.day_1_main_temp}°F
  </li>
   <li>
       Humidity: {props.day_1_humidity}%
        </li>

  <li>
        Wind: {props.day_1_wind_speed}mph
        </li>
        <li>
        Gust: {props.day_1_wind_gust}mph
        </li>
</ul>

</div>
  </div>




  <div className="column

is-6-mobile
is-3-tablet
is-2-widescreen
is-2-fullhd
is-2-desktop
   ">
  <div className="box ">
<div className="has-text-centered ">

<p className=" has-text-primary">
{props.day_2_date }
</p>

 <img   src={`http://openweathermap.org/img/wn/${props.day_2_weather_icon}@2x.png`}  alt='weather icons' />

<p className="mb-3 has-text-primary has-text-weight-light">{props.day_2_weather_description }</p>
</div>

<ul  className="has-text-primary ">
  <li className="is-size-3 has-text-centered mt-3" >
  {props.day_2_main_temp}°F
  </li>
   <li>
   Humidity: {props.day_2_humidity}%
  </li>
  <li>
  Wind: {props.day_2_wind_speed}mph
</li>
  <li>
  Gust: {props.day_2_wind_gust}mph
</li>
</ul>

</div>
  </div>




  <div className="column

is-6-mobile
is-3-tablet
is-2-widescreen
is-2-fullhd
is-2-desktop
   ">
  <div className="box">
  <div className="has-text-centered">

<p className=" has-text-primary">
{props.day_2_date }
</p>

 <img  src={`http://openweathermap.org/img/wn/${props.day_3_weather_icon}@2x.png`}  alt='weather icons' />

<p className="mb-3 has-text-primary ">{props.day_3_weather_description }</p>
</div>

<ul  className="has-text-primary ">
<li className="is-size-3 has-text-centered mt-3" >
  {props.day_3_main_temp}°F
  </li>
   <li>
       Humidity: {props.day_3_humidity}%
        </li>
  <li>
       Wind: {props.day_3_wind_speed}mph
        </li>
        <li>
        Gust: {props.day_3_wind_gust}mph
        </li>
</ul>

</div>
  </div>

  <div className="column


is-6-mobile
is-3-tablet
is-2-widescreen
is-2-fullhd
is-2-desktop

">



    <div className="box">
 <div className="has-text-centered">

<p className=" has-text-primary">
{props.day_4_date }
</p>

 <img src={`http://openweathermap.org/img/wn/${props.day_4_weather_icon}@2x.png`}  alt='weather icons' />


<p className="mb-3 has-text-primary ">{props.day_4_weather_description }</p>


</div>
<ul  className="has-text-primary ">
<li className="is-size-3 has-text-centered mt-3" >
  {props.day_4_main_temp}°F
  </li>
   <li>
       Humidity: {props.day_4_humidity}%
        </li>

  <li>
       Wind: {props.day_4_wind_speed}mph
        </li>
        <li>
        Gust: {props.day_4_wind_gust}mph
        </li>
</ul>


</div>





  </div>
  <div className="column


is-6-mobile
is-3-tablet
is-2-widescreen
is-2-fullhd
is-2-desktop
  ">
    <div className="box  ">

    <div className="has-text-centered ">

<p className=" has-text-primary">
{props.day_5_date }
</p>

 <img   src={`http://openweathermap.org/img/wn/${props.day_5_weather_icon}@2x.png`}  alt='weather icons' />
<p className="mb-3 has-text-primary ">{props.day_5_weather_description }</p>

</div>

<ul  className="has-text-primary ">
<li className="is-size-3 has-text-centered mt-3" >
  {props.day_5_main_temp}°F
  </li>
   <li>
       Humidity: {props.day_5_humidity}%
  </li>

  <li>
       Wind: {props.day_5_wind_speed}mph
  </li>
  <li>
        Gust: {props.day_5_wind_gust}mph
   </li>
</ul>

</div>
  </div>

</div>

    </>
  );
};
export default MobileScrolling
;