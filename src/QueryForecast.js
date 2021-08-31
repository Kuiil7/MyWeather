import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Geo5days from './Geo5days';
import { DateTime } from 'luxon';

const moment = require('moment');
require('dotenv').config()


function QueryForecast () {

  const [data, setData] = useState({ list: [] });

  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const [showGeoLoc, setShowGeoLoc] = useState(true);

  const [url, setUrl] = useState(``);


  const baseWeatherUrl = 'https://api.openweathermap.org/data/2.5/'




  useEffect(() => {
    const fetchData = async () => {

      setIsLoading(true);

setIsError(false)

      const result = await axios(url);

      setData(result.data);

      setIsLoading(false);
      console.log(result.data)

    };
    fetchData();
  }, [url]);



  return (
    <Fragment>

<form onSubmit={event => {
        setUrl(`${baseWeatherUrl}forecast?q=${query}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
        event.preventDefault();
      }}>

  <div className="column is-6  is-half is-offset-one-quarter">

  <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
          className="input is-primary mb-2"
          placeholder="enter a city name"
          onClick={() => setShowGeoLoc(!showGeoLoc)}
        />
   <button className="button is-small is-primary" type="submit">Search</button>

  </div>
 </form>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="container  mt-2 ">
            <div  >

{data.list && data.list.slice(0,1).map(queryItems => (

<div key={queryItems}>

<div class="columns has-background-primary p-5  ">

  <div class="column  has-text-centered  ">
  <p class="subtitle is-size-1  mb-0 has-text-white">
 {data.city.name}, {data.city.country}
</p>
<p className="subtitle  has-text-white ">
    Population: {data.city.population.toLocaleString()}

    </p>
<span  >
<img  style={{height:"200px"}}  src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`}  alt='weather icons' ></img>
</span>
<p className=" title has-text-white is-size-3">{ data.list[9].weather[0].description.toUpperCase() }</p>


  </div>


  <div class="column has-text-white has-text-centered">
   <p className="title is-size-1  mb-0 has-text-white" style={{fontSize:'60px'}}>
{data.list[0].main.temp} &#8457;
</p>


<p className="mb-3">
{moment.unix(data.list[0].dt).format('LLLL')}

</p>
<p className="has-text-pulled-left is-size-4">
    Humidity: {data.list[0].main.humidity} %

    </p>
    <p className="mb-2 is-size-4">
   Cloudiness: {data.list[0].clouds.all} %
</p>
    <p className="mb-2 is-size-4">
    Wind Speed: {data.list[0].wind.speed} mph
</p>

<p className="is-size-4">
    Feels like: {data.list[0].main.feels_like} %

    </p>
    <p className="is-size-4">
    Temp Max: {data.list[0].main.temp_max} %
    </p>
    <p className="is-size-4">
    Temp Min: {data.list[0].main.temp_min} %
    </p>

    <p className="mt-2 is-size-4">
    Sunrise {moment.unix(data.city.sunrise).format('LTS')}
</p>
<p className="is-size-4">
    Sunrise {moment.unix(data.city.sunset).format('LTS')}
</p>



</div>

</div>


<br />

<div className="columns p-5 pt-6  is-flex-wrap-wrap  has-text-centered ">
  <div className="column   box has-text-primary  mr-2">

<p className="is-size-2">
{DateTime.now().toLocaleString() }
</p>
  <img className="has-content-centered has-text-primary"  src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`}  alt='weather icons' >
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

  <div className="column box  has-text-primary mr-2">
  <p className="is-size-2">

{moment( data.list[8].dt_txt).format('L') }
</p>
  <img className="has-content-centered has-text-primary" src={`http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`}  alt='weather icons' >
  </img>
<p className="mb-2 has-text-primary">{ data.list[8].weather[0].description.toUpperCase() }</p>

<ul>
  <li className="is-size-2">
  {data.list[8].main.temp}   &#8457;
  </li>
   <li>
        Humidity: {data.list[8].main.humidity} %
        </li>
        <li>
        Wind Speed: {data.list[8].wind.speed} mph
        </li>
        <li>
        Gust: {data.list[8].wind.gust} mph
        </li>
</ul>
  </div>

  <div className="column box has-text-primary mr-2 ">
  <p className="is-size-2">
{moment( data.list[16].dt_txt).format('L') }
</p>
<img className="has-content-centered has-text-primary" src={`http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png`}  alt='weather icons' >
</img>

<p className="mb-2 has-text-primary">{ data.list[16].weather[0].description.toUpperCase() }</p>


<ul>
  <li className="is-size-2">
  {data.list[16].main.temp}   &#8457;
  </li>
   <li>
   Humidity: {data.list[16].main.humidity} %
 </li>
   <li>
 Wind Speed: {data.list[16].wind.speed} mph
</li>
<li>
   Gust: {data.list[16].wind.gust} mph
        </li>
</ul>

  </div>

  <div className="column box has-text-primary mr-2">

  <p className="is-size-2">
{moment( data.list[24].dt_txt).format('L') }
</p>

<img className="has-content-centered has-text-primary" src={`http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png`}  alt='weather icons' ></img>

<p className="mb-2 has-text-primary">{ data.list[24].weather[0].description.toUpperCase() }</p>

  <ul>
  <li className="is-size-2">
  {data.list[24].main.temp}   &#8457;
  </li>
   <li>
       Humidity: {data.list[24].main.humidity} %
        </li>

  <li>
        Wind Speed: {data.list[24].wind.speed} mph
        </li>
        <li>
        Gust: {data.list[24].wind.gust} mph
        </li>
</ul>
  </div>

  <div className="column box has-text-primary mb-5">
  <p className="is-size-2">
{moment( data.list[32].dt_txt).format('L') }
</p>

  <img className="has-content-centered has-text-primary" src={`http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png`}  alt='weather icons' ></img>

  <p className="mb-2 has-text-primary">{ data.list[32].weather[0].description.toUpperCase() }</p>

<ul>
  <li className="is-size-2">
  {data.list[32].main.temp}   &#8457;
  </li>
   <li>
        Humidity: {data.list[32].main.humidity} %

        </li>
        <li>
        Wind Speed: {data.list[32].wind.speed} mph
        </li>
        <li>
        Gust: {data.list[32].wind.gust} mph
        </li>
</ul>
  </div>
</div>
</div>

 ))}

 </div>

        </div>

      )}


{showGeoLoc &&
<Geo5days />}

    </Fragment>


  );
}

export default QueryForecast;