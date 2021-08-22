import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { DateTime } from 'luxon';

const moment = require('moment');
require('dotenv').config()


const HeroHeader2 = () => {


  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [data, setData] = useState( {list: []} );

    useEffect(() => {

      function geolocation () {
        navigator.geolocation.getCurrentPosition(function(position) {
          let latitude = position.coords.latitude;
          let longitude = position.coords.longitude;
          setLat(latitude);
          setLon(longitude);
        });
      }


      function getData () {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

          axios.get(url)
            .then(function (response) {
              setData(response.data);
            })
            .catch(function (error) {
              return error
          });
        }

geolocation()
if (!lat || !lon) return;
getData();
}, [lat, lon]);



  return (
<>

    <div className="has-text-centered">
    { data.list.slice(0, 1).map(items =>
  <div key={items} >
<div className="box column has-text-primary">
  <p className=" is-size-1 ">
     {data.city.name}, {data.city.country}
    </p>
    <p className="subtitle has-text-primary">
    Population: {data.city.population.toLocaleString()}

    </p>
<p>
{moment.utc(data.list[0].dt_txt).format('LLLL').toUpperCase()}
</p>
  <img className="has-content-centered has-text-primary" style={{height:"200px"}} src={`https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`}  alt='weather icons' ></img>

  <p className="mb-2 has-text-primary">{ data.list[9].weather[0].description.toUpperCase() }</p>

    <ul>
<li className="is-size-2">
{data.list[0].main.temp}   &#8457;
</li>
<li>
Humidity: {data.list[0].main.humidity} %
</li>
<li>
Wind Speed: {data.list[0].wind.speed} mph
</li>
<li>
Gust: {data.list[0].wind.gust} mph
</li>

</ul>

</div>

    <div className="columns p-6  is-flex-wrap-wrap ">
  <div className="column   box has-text-primary">

<p className="is-size-2">
{DateTime.now().toLocaleString() }
</p>
  <img className="has-content-centered has-text-primary"  src={`https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`}  alt='weather icons' >
  </img>

<p className="mb-2 has-text-primary ">{ data.list[9].weather[0].description.toUpperCase() }</p>
<ul >


<li className="is-size-2">
{data.list[0].main.temp}   &#8457;
</li>
<li>
Humidity: {data.list[0].main.humidity} %
</li>
<li>
Wind Speed: {data.list[0].wind.speed} mph
</li>
<li>
Gust: {data.list[0].wind.gust} mph
</li>

</ul>
  </div>

  <div className="column box  has-text-primary">
  <p className="is-size-2">

{moment( data.list[7].dt_txt).format('L') }
</p>
  <img className="has-content-centered has-text-primary" src={`https://openweathermap.org/img/wn/${data.list[7].weather[0].icon}@2x.png`}  alt='weather icons' >
  </img>
<p className="mb-2 has-text-primary">{ data.list[7].weather[0].description.toUpperCase() }</p>

<ul>
  <li className="is-size-2">
  {data.list[7].main.temp}   &#8457;
  </li>
   <li>
        Humidity: {data.list[7].main.humidity} %
        </li>
        <li>
        Wind Speed: {data.list[7].wind.speed} mph
        </li>
        <li>
        Gust: {data.list[7].wind.gust} mph
        </li>
</ul>
  </div>

  <div className="column box has-text-primary ">
  <p className="is-size-2">
{moment( data.list[15].dt_txt).format('L') }
</p>
<img className="has-content-centered has-text-primary" src={`https://openweathermap.org/img/wn/${data.list[15].weather[0].icon}@2x.png`}  alt='weather icons' >
</img>

<p className="mb-2 has-text-primary">{ data.list[15].weather[0].description.toUpperCase() }</p>


<ul>
  <li className="is-size-2">
  {data.list[15].main.temp}   &#8457;
  </li>
   <li>
   Humidity: {data.list[15].main.humidity} %
 </li>
   <li>
 Wind Speed: {data.list[15].wind.speed} mph
</li>
<li>
   Gust: {data.list[15].wind.gust} mph
        </li>
</ul>

  </div>

  <div className="column box has-text-primary">

  <p className="is-size-2">
{moment( data.list[23].dt_txt).format('L') }
</p>

<img className="has-content-centered has-text-primary" src={`https://openweathermap.org/img/wn/${data.list[23].weather[0].icon}@2x.png`}  alt='weather icons' ></img>

<p className="mb-2 has-text-primary">{ data.list[23].weather[0].description.toUpperCase() }</p>

  <ul>
  <li className="is-size-2">
  {data.list[23].main.temp}   &#8457;
  </li>
   <li>
       Humidity: {data.list[23].main.humidity} %
        </li>

  <li>
        Wind Speed: {data.list[23].wind.speed} mph
        </li>
        <li>
        Gust: {data.list[23].wind.gust} mph
        </li>
</ul>
  </div>

  <div className="column box has-text-primary mb-5">
  <p className="is-size-2">
{moment( data.list[31].dt_txt).format('L') }
</p>

  <img className="has-content-centered has-text-primary" src={`https://openweathermap.org/img/wn/${data.list[31].weather[0].icon}@2x.png`}  alt='weather icons' ></img>

  <p className="mb-2 has-text-primary">{ data.list[31].weather[0].description.toUpperCase() }</p>

<ul>
  <li className="is-size-2">
  {data.list[31].main.temp}   &#8457;
  </li>
   <li>
        Humidity: {data.list[31].main.humidity} %

        </li>
        <li>
        Wind Speed: {data.list[31].wind.speed} mph
        </li>
        <li>
        Gust: {data.list[31].wind.gust} mph
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
export default HeroHeader2;