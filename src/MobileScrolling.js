import React from "react";


const MobileScrolling
 = (props) => {
  return (
    < >

<div className="columns  is-mobile scrolling-wrapper ">
 <div className="column
 is-7-mobile
is-3-tablet
is-3-desktop
is-3-widescreen
is-3-fullhd
">



  <div className="box ">
<div className="has-text-centered">

<p className="has-text-weight-bold title is-4 has-text-weight-bold has-text-primary">
{props.day_1_date }
</p>

 <img className="has-content-centered has-text-primary"  src={`http://openweathermap.org/img/wn/${props.day_1_Weather_icon}@2x.png`}  alt='weather icons' />


<p className="mb-2 has-text-primary ">{props.day_1_weather_description }</p>

</div>
<ul  className="has-text-primary ">
  <li className="is-size-3 has-text-centered " >
  {props.day_1_main_temp}&#8457;
  </li>
   <li>
       Humidity: {props.day_1_humidity} %
        </li>

  <li>
        Wind: {props.day_1_wind_speed} mph
        </li>
        <li>
        Gust: {props.day_4_wind_gust} mph
        </li>
</ul>

</div>
  </div>




  <div className="column

 is-7-mobile
is-3-tablet
is-3-desktop
is-3-widescreen
is-3-fullhd
   ">
  <div className="box ">
<div className="has-text-centered ">

<p className="has-text-weight-bold title is-4 has-text-weight-bold has-text-primary">
{props.day_1_date }
</p>

 <img className="has-content-centered has-text-primary"  src={`http://openweathermap.org/img/wn/${props.day_2_weather_icon}@2x.png`}  alt='weather icons' />

<p className="mb-2 has-text-primary ">{props.day_2_weather_description }</p>
</div>

<ul  className="has-text-primary ">
  <li className="is-size-3 has-text-centered " >
  {props.day_2_main_temp}&#8457;
  </li>
   <li>
   Humidity:{props.day_2_humidity}%
  </li>
  <li>
  Wind:{props.day_2_wind_speed}mph
</li>
  <li>
  Gust:{props.day_2_wind_gust}mph
</li>
</ul>

</div>
  </div>




  <div className="column
    is-7-mobile
   is-3-tablet
   is-3-desktop
   is-3-widescreen
   is-3-fullhd   ">
  <div className="box">
  <div className="has-text-centered">

<p className="has-text-weight-bold title is-4 has-text-weight-bold has-text-primary">
{props.day_3_date }
</p>

 <img className="has-content-centered has-text-primary"  src={`http://openweathermap.org/img/wn/${props.day_3_weather_icon}@2x.png`}  alt='weather icons' />

<p className="mb-2 has-text-primary ">{props.day_3_weather_description }</p>
</div>

<ul  className="has-text-primary ">
  <li className="is-size-3 has-text-centered " >
  {props.day_3_main_temp}&#8457;
  </li>
   <li>
       Humidity: {props.day_3_humidity} %
        </li>
  <li>
       Wind: {props.day_3_wind_speed} mph
        </li>
        <li>
        Gust: {props.day_3_wind_gust} mph
        </li>
</ul>

</div>
  </div>

  <div className="column
   is-7-mobile
  is-3-tablet
  is-3-desktop
  is-3-widescreen
  is-3-fullhd   ">



    <div className="box">
 <div className="has-text-centered">

<p className="has-text-weight-bold title is-4 has-text-weight-bold has-text-primary">
{props.day_4_date }
</p>

 <img className="has-content-centered has-text-primary"  src={`http://openweathermap.org/img/wn/${props.day_4_weather_icon}@2x.png`}  alt='weather icons' />


<p className="mb-2 has-text-primary ">{props.day_1_weather_description }</p>


</div>
<ul  className="has-text-primary ">
  <li className="is-size-3 has-text-centered " >
  {props.day_4_main_temp}&#8457;
  </li>
   <li>
       Humidity: {props.day_4_humidity} %
        </li>

  <li>
       Wind: {props.day_4_wind_speed} mph
        </li>
        <li>
        Gust: {props.day_4_wind_gust} mph
        </li>
</ul>


</div>





  </div>
  <div className="column
   is-7-mobile
  is-3-tablet
  is-3-desktop
  is-3-widescreen
  is-3-fullhd

  ">
    <div className="box ">

    <div className="has-text-centered">

<p className="has-text-weight-bold title is-4 has-text-weight-bold has-text-primary">
{props.day_5_date }
</p>

 <img className="has-content-centered has-text-primary"  src={`http://openweathermap.org/img/wn/${props.day_5_weather_icon}@2x.png`}  alt='weather icons' />


<p className="mb-2 has-text-primary ">{props.day_5_weather_description }</p>


</div>
<ul  className="has-text-primary ">
  <li className="is-size-3 has-text-centered " >
  {props.day_5_main_temp}&#8457;
  </li>
   <li>
       Humidity: {props.day_5_humidity} %
        </li>

  <li>
       Wind: {props.day_5_wind_speed} mph
        </li>
        <li>
        Gust: {props.day_5_wind_gust} mph
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