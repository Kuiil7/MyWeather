import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { DateTime } from 'luxon';

//import { DateTime } from 'luxon';
//import Likes from './Likes';
//import useLocalStorageState from 'use-local-storage-state'

//import FavoriteButton from './FavoriteButton';
//import Card from './Card'
import './App.css'
//import Demo from './Demo'
const moment = require('moment');

require('dotenv').config()



function QueryForecast () {

  const [data, setData] = useState({  weather: [] });
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);


 const baseWeatherUrl = 'https://api.openweathermap.org/data/2.5/'

  const [url, setUrl] = useState(``);


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
        setUrl(`${baseWeatherUrl}weather?q=${query}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);

        event.preventDefault();
      }}>

  <div className="column is-6  is-half is-offset-one-quarter">

  <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
          className="input is-primary mb-2"
          placeholder="enter a keyword"

        />
   <button className="button is-small is-primary" type="submit">Search</button>

  </div>
 </form>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="container  ">
{data.weather && data.weather.map(queryItems => (

  <div className="columns  box m-1 " key={queryItems} >
  <div className="column has-text-centered ">

  <p className="title mb-0 has-text-primary" style={{fontSize:'60px'}}>
  {data.name }, {data.sys.country }
  </p>
  <p className='title is-size-3 m-0'>

{data.weather[0].description}
</p>
<span >
<img  style={{height:"200px"}}  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}  alt='weather icons' ></img>

</span>

  </div>
  <div className="column has-text-primary ">
  <p className='title is-justify-content-center has-text-primary mb-0' style={{fontSize:'80px'}}>
  {data.main.temp} &#8457;
</p>

<p className="mb-3">
{moment.unix(data.dt).format('LLLL')}

</p>
<p className="has-text-pulled-left is-size-4">
    Humidity: {data.main.humidity} %

    </p>
    <p className="mb-2 is-size-4">
   Cloudiness: {data.clouds.all} %
</p>
    <p className="mb-2 is-size-4">
    Wind Speed: {data.wind.speed} mph
</p>

<p className="is-size-4">
    Feels like: {data.main.feels_like} %

    </p>
    <p className="is-size-4">
    Temp Max: {data.main.temp_max} %

    </p>
    <p className="is-size-4">
    Temp Min: {data.main.temp_min} %

    </p>

    <p className="mt-2 is-size-4">
    Sunrise {moment.unix(data.sys.sunrise).format('LTS')}

</p>
<p className="is-size-4">
    Sunrise {moment.unix(data.sys.sunset).format('LTS')}

</p>
    </div>


</div>









 ))}





        </div>
      )}


<div >


</div>


    </Fragment>
  );
}

export default QueryForecast;