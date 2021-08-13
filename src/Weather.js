

import React, { useState, useEffect } from "react";
import axios from "axios";
//import Card from "./Card";

function Weather() {
  const [data, setData] = useState({weather: []});



  useEffect(() => {

   axios
      .get("  https://api.openweathermap.org/data/2.5/weather?q=San Diego,us&units=imperial&appid=ed2d8b9a647015246d1c2a69c8fa34a3")
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);





  return (
    <div className="recipe">

{data.weather && data.weather.map(main => (



<div key={main.id}>
      <div className='reverse-columns'>{data.name} </div>
      <div className='reverse-columns'> </div>
    </div>

 ))}
    </div>
  );
}

export default Weather;