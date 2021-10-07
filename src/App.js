import './App.css';
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Geo5days from './Geo/Geo5days';
import { DateTime } from 'luxon';
import Main from './Main'
import MobileScrolling from './MobileScrolling';
import WeatherList from './WeatherList';
import WeatherList2 from './WeatherList2';
import Thumbnail from './Thumbnail';

const moment = require('moment');
require('moment-timezone');

require('dotenv').config()

function App() {

  const [data, setData] = useState({ list: [] });
  const [showGeoLoc, setShowGeoLoc] = useState(true);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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




    <div className="App">

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
        <div className="container
        is-jusify-content-center

        ">
 <div className="columns ">


<div className="column ">



{data.list && data.list.slice(0,1).map( mainIndex => (

<div key={mainIndex} >


<WeatherList
geoWeather_icon={data.list[7].weather[0].icon}
description={data.list[9].weather[0].description.toUpperCase()}
dt={data.list[0].dt_txt}
humidity={data.list[0].main.humidity}
clouds_all={data.list[0].clouds.all}
wind_speed={data.list[0].wind.speed}
feels_like={data.list[0].main.feels_like}
temp_max={data.list[0].main.temp_max}
temp_min={data.list[0].main.temp_min}
sunrise={moment.unix(data.city.sunrise).format('LTS')}
sunset={moment.unix(data.city.sunset).format('LTS')}
weather_icon={data.list[7].weather[0].icon}
/>

<WeatherList2
geoWeather_icon={data.list[7].weather[0].icon}
description={data.list[9].weather[0].description.toUpperCase()}
dt={data.list[0].dt_txt}
humidity={data.list[0].main.humidity}
clouds_all={data.list[0].clouds.all}
wind_speed={data.list[0].wind.speed}
feels_like={data.list[0].main.feels_like}
temp_max={data.list[0].main.temp_max}
temp_min={data.list[0].main.temp_min}
sunrise={moment.unix(data.city.sunrise).format('LTS')}
sunset={moment.unix(data.city.sunset).format('LTS')}
weather_icon={data.list[7].weather[0].icon}
/>

</div>

 ))}


</div>
</div>

      </div>

      )}
{showGeoLoc &&
<Geo5days />}
  </Fragment>

    </div>

  );
}

export default App;
