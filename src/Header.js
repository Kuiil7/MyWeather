import React from "react";
import { DateTime } from 'luxon';


const Header = () => {
  return (
    < >
<div class="columns  has-text-centered">
  <div class="column">
  <p className="title has-text-white ">
    Welcome to MyWeather!
    </p>
    <p className="subtitle is-7 is-italic has-text-white">
     Your #1 U.S. Weather update search site powered by <a className="has-text-white" href="https://openweathermap.org/">Openweathermap.org!</a>
    </p>
  </div>


</div>
    </>
  );
};
export default Header;