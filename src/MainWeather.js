import React from 'react';

import HeroHeader from './HeroHeader';
import HeroHeader2 from './HeroHeader2';
import Footer from './Footer';


require('dotenv').config()

function MainWeather() {

  return (

<div>
<HeroHeader />
<HeroHeader2 />
<Footer />
</div>
  );
}

export default MainWeather;