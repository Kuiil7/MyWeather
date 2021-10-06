import React from "react";


const GeoThumbnails= (props) => {
  return (
    < >
  <div >

<img className="has-content-centered has-text-primary "  src={`http://openweathermap.org/img/wn/${props.geoWeather_icon}@2x.png`}
style={{height:"150px"}}
alt='weather icons' >
  </img>
<p className=" title has-text-white is-size-1  ">
{props.main_temp} &#8457;

</p>
  <p className=" title  has-text-weight-light has-text-white is-size-3  ">{ props.description }</p>
  </div>

    </>
  );
};
export default GeoThumbnails;