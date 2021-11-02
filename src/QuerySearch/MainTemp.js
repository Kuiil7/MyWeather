import React from "react";


const MainTemp = (props) => {

  let MainTempStyle = {  fontSize: "290%" }

  return (
  < >
<p className="is-size-3  has-text-weight-bold has-text-white   ">{props.name}, {props.country}
</p>

<p className="has-text-white " style={MainTempStyle}>{props.main_temp} °F</p>

 <p className="title is-4 has-text-weight-light has-text-white">{props.description.toUpperCase()} </p>
    </>
  );
};
export default MainTemp;