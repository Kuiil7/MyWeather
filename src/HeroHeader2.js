import React, {Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { DateTime } from 'luxon';

//import FiveDayForecast from './FiveDayForecast';
const moment = require('moment'); // require

require('dotenv').config()


const HeroHeader = () => {


  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [data, setData] = useState( {list: []} );

  function geolocation () {
    navigator.geolocation.getCurrentPosition(function(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      setLat(latitude);
      setLon(longitude);
      console.log(lat);
      console.log(lon);

    });
  }


  function getData () {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
      axios.get(url)
        .then(function (response) {
          // handle success
          setData(response.data);
          console.log(response);
          console.log(data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          return error
        });
    }

    useEffect(() => {
geolocation()
if (!lat || !lon) return;
getData();
}, [lat, lon]);



  return (
<>

    <div className=" has-text-primary has-text-centered">

    { data.list.slice(0, 1).map((items) =>
  <div key={items.id}>
  <p className=" is-size-1 ">
     {data.city.name}, {data.city.country}
    </p>
    <p className="subtitle has-text-primary">
    Population: {data.city.population.toLocaleString()}

    </p>
<p className="is-size-3">Current Weather:</p>

  <img className="has-content-centered has-text-primary" stylet={{height:"200px"}} src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`}  alt='weather icons' ></img>

  <p className="mb-2 has-text-primary">{ data.list[9].weather[0].description.toUpperCase() }</p>







    <ul>

<li className="is-size-2">


{data.list[0].main.temp}   &#8457;

</li>
<li>
Humidity: {data.list[0].main.humidity} %

</li>
<li>
Wind Speed: {data.list[0].main.humidity} mph

</li>

<li>
Gust: {data.list[0].main.humidity} mph

</li>

</ul>
<hr/>
    <div className="columns  ">

  <div className="column  is-justify-content-center">
  <p>

</p>
<p className="is-size-2">
{DateTime.now().toLocaleString() }

</p>
  <img className="has-content-centered has-text-primary" stylet={{height:"200px"}} src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`}  alt='weather icons' ></img>

  <p className="mb-2 ">{ data.list[9].weather[0].description.toUpperCase() }</p>







    <ul>

<li className="is-size-2">


{data.list[0].main.temp}   &#8457;

</li>
<li>
Humidity: {data.list[0].main.humidity} %

</li>
<li>
Wind Speed: {data.list[0].main.humidity} mph

</li>

<li>
Gust: {data.list[0].main.humidity} mph

</li>

</ul>

  </div>
  <hr/>
  <div className="column">
  <p className="is-size-2">
{moment( data.list[7].dt_txt).format('L') }

</p>
  <img className="has-content-centered has-text-primary" src={`http://openweathermap.org/img/wn/${data.list[7].weather[0].icon}@2x.png`}  alt='weather icons' ></img>
      <p className="mb-2 has-text-primary">{ data.list[7].weather[0].description.toUpperCase() }</p>

<ul>

  <li className="is-size-2">
  {data.list[7].main.temp}   &#8457;
  </li>      <li>
        Humidity: {data.list[7].main.humidity} %

        </li>
        <li>
        Wind Speed: {data.list[7].main.humidity} mph

        </li>
        <li>
        Gust: {data.list[7].main.humidity} mph

        </li>

</ul>


  </div>
  <hr/>
  <div className="column">
  <p className="is-size-2">
{moment( data.list[16].dt_txt).format('L') }

</p>
  <img className="has-content-centered has-text-primary" src={`http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png`}  alt='weather icons' ></img>
      <p className="mb-2 has-text-primary">{ data.list[16].weather[0].description.toUpperCase() }</p>

  <ul>
  <li className="is-size-2">
  {data.list[16].main.temp}   &#8457;
  </li>      <li>
        Humidity: {data.list[16].main.humidity} %

        </li>
        <li>
        Wind Speed: {data.list[16].main.humidity} mph

        </li>
        <li>
        Gust: {data.list[16].main.humidity} mph

        </li>

</ul>

  </div>
  <hr/>
  <div className="column">

  <p className="is-size-2">
{moment( data.list[25].dt_txt).format('L') }

</p>
  <img className="has-content-centered has-text-primary" src={`http://openweathermap.org/img/wn/${data.list[25].weather[0].icon}@2x.png`}  alt='weather icons' ></img>
      <p className="mb-2 has-text-primary">{ data.list[25].weather[0].description.toUpperCase() }</p>

  <ul>
  <li className="is-size-2">
  {data.list[25].main.temp}   &#8457;
  </li>      <li>
        Humidity: {data.list[25].main.humidity} %

        </li>
        <li>
        Wind Speed: {data.list[25].main.humidity} mph

        </li>
        <li>
        Gust: {data.list[25].main.humidity} mph

        </li>

</ul>



  </div>
  <hr/>
  <div className="column">
  <p className="is-size-2">
{moment( data.list[33].dt_txt).format('L') }

</p>
  <img className="has-content-centered has-text-primary" src={`http://openweathermap.org/img/wn/${data.list[33].weather[0].icon}@2x.png`}  alt='weather icons' ></img>
      <p className="mb-2 has-text-primary">{ data.list[33].weather[0].description.toUpperCase() }</p>

  <ul>
  <li className="is-size-2">
  {data.list[33].main.temp}   &#8457;
  </li>      <li>
        Humidity: {data.list[33].main.humidity} %

        </li>
        <li>
        Wind Speed: {data.list[33].main.humidity} mph

        </li>
        <li>
        Gust: {data.list[33].main.humidity} mph

        </li>

</ul>

  </div>


</div>

</div>

)}
    </div>

</>
  );
};
export default HeroHeader;