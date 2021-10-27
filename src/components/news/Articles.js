import React from "react";
import TextScroller from "./TextScroller"

const Articles
 = (props) => {

  const NewsTicker= <div  >




<a classname=" has-text-light" alt="article icons" href={props.url}>{props.title}</a>



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