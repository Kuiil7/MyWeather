import React from "react";



const Thumbnails = (props) => {
  return (
    < >

<div class="columns is-mobile">
  <div class="column is-half is-11
is-offset-1">

<img className="has-content-centered has-text-primary "  src={`http://openweathermap.org/img/wn/${props.weather}@2x.png`}
style={{height:"150px"}}
alt='weather icons' >
  </img>


  </div>
</div>


    </>
  );
};
export default Thumbnails;