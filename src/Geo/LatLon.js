import React, {useState, useEffect } from 'react';
import axios from 'axios';
import WeatherIcons from '../Icons/WeatherIcons';
import MobileScrolling from '../QuerySearch/MobileScrolling';
import WeatherList1 from '../QuerySearch/WeatherRows';
import MainTemp from '../QuerySearch/MainTemp';

const moment = require('moment');

require('dotenv').config()

const LatLon = () => {

  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [data, setLatLonData] = useState({list: []});

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

    useEffect(() => {
      function geolocation () {
        navigator.geolocation.getCurrentPosition(function(position) {
          let latitude = position.coords.latitude;
          let longitude = position.coords.longitude;
          setLat(latitude);
          setLon(longitude);
        });
      }

        const getData = async () => {
          const baseWeatherUrl = 'https://api.openweathermap.org/data/2.5/'
          const latlonURL = `${baseWeatherUrl}forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
          setIsLoading(true);
          setIsError(false)
          const latlonResult = await axios(latlonURL);
          setLatLonData(latlonResult.data);
          setIsLoading(false);
        };

geolocation()
if (!lat || !lon) return;
getData()
}, [lat, lon]);


  return (
<>
{isError && <div>Something went wrong ...</div>}

{isLoading ? (
  <div><p className="has-text-white"> Loading...</p></div>
) : (

<div>
{data.list && data.list.slice(0,1).map( mainIndex => (
  <div className="container">

    
 <div key={mainIndex}>
 
 <div className="columns is-mobile">
<div className="column">
<div className="is-pulled-right">
<p className=" has-text-white is-size-3">{moment().format('L')}</p>


<MainTemp
name={data.city.name}
country={data.city.country}
population={data.city.population.toLocaleString()}
description={data.list[0].weather[0].description}
main_temp={data.list[0].main.temp}
dt={moment(data.list[0].dt_txt).format('L')}
humidity={data.list[0].main.humidity}
clouds_all={data.list[0].clouds.all}
wind_speed={data.list[0].wind.speed}
feels_like={data.list[0].main.feels_like}
temp_max={data.list[0].main.temp_max}
temp_min={data.list[0].main.temp_min}
sunrise={moment.unix(data.city.sunrise).format('LTS')}
sunset={moment.unix(data.city.sunset).format('LTS')}
weather_icon={data.list[0].weather[0].icon}
/>

</div>
</div>

<div className="column">
  <WeatherIcons
weather_icon={data.list[0].weather[0].icon}
description={data.list[9].weather[0].description}
/>

</div>
</div>


  <WeatherList1
weather_icon={data.list[0].weather[0].icon}
description={data.list[9].weather[0].description}
dt={data.list[0].dt_txt}
humidity={data.list[0].main.humidity}
clouds_all={data.list[0].clouds.all}
wind_speed={data.list[0].wind.speed}
feels_like={data.list[0].main.feels_like}
temp_max={data.list[0].main.temp_max}
temp_min={data.list[0].main.temp_min}
sunrise={moment.unix(data.city.sunrise).format('LTS')}
sunset={moment.unix(data.city.sunset).format('LTS')}
/>


<p className='title is-3 has-text-weight-light has-text-white has-text-centered'>Five Day Forecast </p>

  <MobileScrolling
name={data.city.name}
country={data.city.country}
population={data.city.population.toLocaleString()}
description={data.list[0].weather[0].description}
main_temp={data.list[0].main.temp}
dt={moment(data.list[0].dt_txt).format('L')}
humidity={data.list[0].main.humidity}
clouds_all={data.list[0].clouds.all}
wind_speed={data.list[0].wind.speed}
feels_like={data.list[0].main.feels_like}
temp_max={data.list[0].main.temp_max}
temp_min={data.list[0].main.temp_min}
sunrise={moment.unix(data.city.sunrise).format('LTS')}
sunset={moment.unix(data.city.sunset).format('LTS')}
weather_icon={data.list[0].weather[0].icon}

day_1_weather_icon={data.list[0].weather[0].icon}
day_1_weather_description={ data.list[0].weather[0].description }
day_1_main_temp={data.list[0].main.temp}
day_1_date={moment( data.list[0].dt_txt).format('L') }
day_1_temp={data.list[0].main.temp}
day_1_humidity={data.list[0].main.humidity}
day_1_clouds_all={data.list[0].clouds.all}
day_1_wind_speed={data.list[0].wind.speed}
day_1_wind_gust={data.list[0].wind.gust}

day_2_weather_icon={data.list[8].weather[0].icon}
day_2_weather_description={ data.list[8].weather[0].description }
day_2_main_temp={data.list[8].main.temp}
day_2_date={moment( data.list[8].dt_txt).format('L') }
day_2_temp={data.list[8].main.temp}
day_2_humidity={data.list[8].main.humidity}
day_2_clouds_all={data.list[8].clouds.all}
day_2_wind_speed={data.list[8].wind.speed}
day_2_wind_gust={data.list[8].wind.gust}

day_3_weather_icon={data.list[16].weather[0].icon}
day_3_weather_description={ data.list[16].weather[0].description }
day_3_main_temp={data.list[16].main.temp}
day_3_date={moment( data.list[16].dt_txt).format('L') }
day_3_temp={data.list[16].main.temp}
day_3_humidity={data.list[16].main.humidity}
day_3_clouds_all={data.list[16].clouds.all}
day_3_wind_speed={data.list[16].wind.speed}
day_3_wind_gust={data.list[16].wind.gust}

day_4_weather_icon={data.list[24].weather[0].icon}
day_4_weather_description={ data.list[24].weather[0].description }
day_4_main_temp={data.list[24].main.temp}
day_4_date={moment( data.list[24].dt_txt).format('L') }
day_4_temp={data.list[24].main.temp}
day_4_humidity={data.list[24].main.humidity}
day_4_clouds_all={data.list[24].clouds.all}
day_4_wind_speed={data.list[24].wind.speed}
day_4_wind_gust={data.list[24].wind.gust}

day_5_weather_icon={data.list[32].weather[0].icon}
day_5_weather_description={ data.list[32].weather[0].description }
day_5_main_temp={data.list[32].main.temp}
day_5_date={moment( data.list[32].dt_txt).format('L') }
day_5_temp={data.list[32].main.temp}
day_5_humidity={data.list[32].main.humidity}
day_5_clouds_all={data.list[32].clouds.all}
day_5_wind_speed={data.list[32].wind.speed}
day_5_wind_gust={data.list[32].wind.gust}
/>


</div>
</div>


  

  


 ))}



</div>

)}

</>
  );
};
export default LatLon;