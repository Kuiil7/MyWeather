import React from "react";
import TextScroller from "./TextScroller"

const Articles
 = (props) => {

  const NewsTicker= <div  >

<div class="columns is-mobile">
  <div class="column">

  <img className="pr-2 is-pulled-left" src={props.urlToImage} alt="Girl in a jacket" width="100" height="200" />

   
<a classname=" has-text-light" alt="article icons" href={props.url}>{props.title}</a>

  </div>
  
</div>


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