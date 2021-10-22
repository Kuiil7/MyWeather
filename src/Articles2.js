import React from "react";
import TextScroller from "./TextScroller"

const Articles2
 = (props) => {


  const NewsTicker = <div class="columns">
  <div class="column ">
  <a className="has-text-white" href={props.url}> {props.title}</a>

  </div>

</div>


  return (
    < >



<div class="columns-reverse is-mobile">
  <div class="column-reverse is-half">
  <TextScroller
text={NewsTicker}
/>
  </div>

</div>







    </>
  );
};
export default Articles2
;