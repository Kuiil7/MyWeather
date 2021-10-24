import React from "react";
import TextScroller from "./TextScroller"

const Articles
 = (props) => {

  const NewsTicker= <div >
    <p className="has-text-white">{props.title}</p>
  </div>

 
  return (
    < >

  <TextScroller
text={NewsTicker}


/>


    </>
  );
};
export default Articles;