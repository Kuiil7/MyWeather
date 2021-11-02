import React from "react";


const MainTemp = (props) => {

  let MainTempStyle = {  fontSize: "320%" }

  return (
  < >

<p className="has-text-white" style={MainTempStyle}>{props.main_temp} °F</p>
 <p className="title is-4 has-text-weight-light has-text-white">{props.description.toUpperCase()} </p>
    </>
  );
};
export default MainTemp;