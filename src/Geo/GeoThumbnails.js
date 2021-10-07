import React from "react";


const GeoThumbnail= (props) => {
  return (
    < >
   <div className="column p-0">
  <figure className="image is-128x128">
    <img className="has-content-centered has-text-primary "  src={`http://openweathermap.org/img/wn/${props.geoWeather_icon}@2x.png`}
style={{height:"150px"}}
alt='weather icons' ></img>
</figure>
<p className=" title is-6
 has-text-weight-light has-text-white ">{props.description}</p>
  </div>

    </>
  );
};
export default GeoThumbnail;