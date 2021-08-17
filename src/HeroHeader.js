import React from "react";
import { DateTime } from 'luxon';


const HeroHeader = () => {






  return (
    <div >
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
    </div>
  );
};
export default HeroHeader;