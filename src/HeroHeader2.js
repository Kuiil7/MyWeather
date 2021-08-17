import React, {useState, useEffect } from 'react';
import axios from 'axios';

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


       <div className="is-justify-content-center">


         <section>

  { data.list.slice(0, 1).map((items) =>
  <div key={items.id}>


<div className="column is-one-quarter box  m-1 has-text-primary "  >

      <div className='column  is-link is-small'>
      <i className="fas fa-map-pin is-danger"> City:</i>
        <p className="mb-3 title is-size-3">
     {data.city.name}, {data.city.country}
</p>

<p className="is-size-5">Population: {data.city.population.toLocaleString()}</p>

      <img className="has-content-centered has-text-primary" src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`}  alt='weather icons' ></img>
      <p className="mb-2 has-text-primary">{ data.list[0].weather[0].description.toUpperCase() }</p>

      <ul>

        <li className="is-size-2">


        {data.list[0].main.temp} 	&#8457;

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
        <li className="mt-2">
        {moment( data.list[0].dt_txt).format('L') }

        </li>
      </ul>



 </div>
    </div>



  </div>
)}




</section>
<section>
 <div className="container  ">
<p className="title is-size-1">
  Five Day Forecast
</p>
{data.list && data.list.slice(0, 1).map((list, x) => (
  <div className="columns sis-centered is-flex-wrap-wrap is-centered  has-text-centered is-mobile " key={x}>

<p className="mb-3 title is-size-3">
{data.city.name}, {data.city.country}
</p>
  <div className="column is-one-quarter box  m-1 has-text-primary "  >

      <div className='column  is-link is-small'>
      <img className="has-content-centered has-text-primary" src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`}  alt='weather icons' ></img>
      <p className="mb-2 has-text-primary">{ data.list[0].weather[0].description.toUpperCase() }</p>

      <ul>

        <li className="is-size-2">


        {data.list[0].main.temp} 	&#8457;

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
        <li className="mt-2">
        {moment( data.list[0].dt_txt).format('L') }

        </li>
      </ul>



 </div>
    </div>



    <div className="column is-one-quarter box  m-1 has-text-primary "  >
      <div className='column  is-link is-small'>
      <img className="has-content-centered has-text-primary" src={`http://openweathermap.org/img/wn/${data.list[9].weather[0].icon}@2x.png`}  alt='weather icons' ></img>
      <p className="mb-2 has-text-primary">{ data.list[9].weather[0].description.toUpperCase() }</p>

<ul>
  <li className="is-size-2">
  {data.list[9].main.temp} 	&#8457;
  </li>      <li>
        Humidity: {data.list[9].main.humidity} %

        </li>
        <li>
        Wind Speed: {data.list[9].main.humidity} mph

        </li>
        <li>
        Gust: {data.list[9].main.humidity} mph

        </li>
        <li className="mt-2">

  {moment( data.list[9].dt_txt).format('L') }
  </li>
</ul>


 </div>
    </div>





    <div className="column is-one-quarter box  m-1 has-text-primary "  >
      <div className='column  is-link is-small'>
      <img className="has-content-centered has-text-primary" src={`http://openweathermap.org/img/wn/${data.list[18].weather[0].icon}@2x.png`}  alt='weather icons' ></img>
      <p className="mb-2 has-text-primary">{ data.list[9].weather[0].description.toUpperCase() }</p>

        <ul>

          <li className="is-size-2">
          {data.list[18].main.temp} 	&#8457;
        </li>
        <li>
               Humidity: {data.list[18].main.humidity} %
          </li>
        <li>
        Wind Speed: {data.list[18].main.humidity} mph

        </li>
        <li>
        Gust: {data.list[18].main.humidity} mph

        </li>
        <li className="mt-2">
{moment( data.list[18].dt_txt).format('L') }

</li>


</ul>

 </div>
    </div>




    <div className="column is-one-quarter box  m-1 has-text-primary "  >
      <div className='column  is-link is-small'>

      <img className="has-content-centered has-text-primary" src={`http://openweathermap.org/img/wn/${data.list[27].weather[0].icon}@2x.png`}  alt='weather icons' ></img>
      <p className="mb-2 has-text-primary">{ data.list[27].weather[0].description.toUpperCase() }</p>

      <ul>
          <li className="is-size-2">
          {data.list[27].main.temp} 	&#8457;

          </li>
          <li>
        Humidity: {data.list[27].main.humidity} %

        </li>
        <li>
        Wind Speed: {data.list[27].main.humidity} mph

        </li>
        <li>
        Gust: {data.list[27].main.humidity} mph

        </li>


        <li className="mt-2">

{moment( data.list[27].dt_txt).format('L') }
</li>
</ul>
 </div>
    </div>



    <div className="column is-one-quarter box  m-1  has-text-primary"  >
      <div className='column  is-link is-small'>
      <img className="has-content-centered has-text-primary" src={`http://openweathermap.org/img/wn/${data.list[35].weather[0].icon}@2x.png`}  alt='weather icons' ></img>
      <p className="mb-2 has-text-primary">{ data.list[35].weather[0].description.toUpperCase() }</p>

<ul>


  <li className="is-size-2">
   {data.list[35].main.temp} 	&#8457;
        </li>
        <li>
        Humidity: {data.list[35].main.humidity} %

        </li>
        <li>
        Wind Speed: {data.list[35].main.humidity} mph

        </li>
        <li>
        Gust: {data.list[35].main.humidity} mph

        </li>
        <li className="mt-2">
{moment( data.list[35].dt_txt).format('L') }
</li>

</ul>
 </div>
    </div>



    </div>
 ))}


</div>









</section>
    </div>

  );
};
export default HeroHeader;