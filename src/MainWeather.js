import React from 'react';

import HeroHeader from './HeroHeader';
import HeroHeader2 from './HeroHeader2';


require('dotenv').config()

function MainWeather() {

  return (

<div>
<HeroHeader />
<HeroHeader2 />

  <div className="content has-text-centered mt-6 has-background-primary" style={{height:"60px"}}>
    <p className="has-text-white m-7 is-justify-content-center">
      MyWeather by <a className="has-text-white " href="https://jgamworks.com">jgamworks.com</a>.
    </p>
  </div>
</div>
  );
}

export default MainWeather;