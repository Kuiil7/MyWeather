import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { DateTime } from 'luxon';
//import Likes from './Likes';
//import useLocalStorageState from 'use-local-storage-state'

//import FavoriteButton from './FavoriteButton';
//import Card from './Card'
import Weather from './Weather'
import './App.css'
//import Demo from './Demo'

require('dotenv').config()



function App() {

  const [data, setData] = useState({  weather: [] });
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const [url, setUrl] = useState(
    `https://api.openweathermap.org/data/2.5/weather?q=San Diego,us&units=imperial&appid=ed2d8b9a647015246d1c2a69c8fa34a3`
  );

  function onSubmit () {
    setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=ed2d8b9a647015246d1c2a69c8fa34a3`);

  }




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
















  const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
  };



  return (
    <Fragment>

<section className="hero is-success is-small">
  <div className="hero-body">
    <p className="title">
    Welcome to MyWeather!
    </p>
    <p className="subtitle is-7 is-italic">
     Your #1 U.S. Weather update search site powered by openweather.org!


    </p>

    <p className="is-pulled-right">
    Today's date: {DateTime.now().toFormat('LLLL dd yyyy')}

    </p>

  </div>

</section>
<section>
  <Weather />
</section>




<form onClick={onSubmit}>

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
        <div>Loading Latest Weather...</div>
      ) : (
        <div className="container ">

<div className="columns is-flex-wrap-wrap is-centered">


{data.weather && data.weather.map((main,i) => (

  <div className="column is-one-quarter box m-1  " key={i} >







      <div className='reverse-columns is-link is-small'>
      <div style={styles}>

        <p>  {data.name} </p>
<div>
<ul>
      <li >Temp: <button className='button is-small is-danger'>{data.main.temp}</button> 	&#8457;</li>
      <li>Humidity: {data.main.humidity} %</li>
      <li>Feels Like: {data.main.feels_like} 	&#8457;</li>
      <li>Tamp Max: {data.main.temp_max} 	&#8457; </li>
      <li>Temp Min: {data.main.temp_min} 	&#8457; </li>

  </ul>
  </div>

  </div>


        </div>
    </div>




 ))}



</div>

        </div>
      )}


<div >

  <div className="content has-text-centered mt-6 has-background-primary" style={{height:"60px"}}>
    <p className="has-text-white m-7 is-justify-content-center">
      MyWeather by <a className="has-text-white " href="https://jgamworks.com">jgamworks.com</a>.
    </p>
  </div>

</div>


    </Fragment>
  );
}

export default App;