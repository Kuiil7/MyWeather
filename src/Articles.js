import React from "react";


const Articles
 = (props) => {
  return (
    < >



<div class="columns
scrolling-wrapper
scrollbar-hidden

">
  <div class="column
  ">


  <article class="media">
  <figure class="media-left">
    <p class="image is-96x96">
    <img src={props.urlToImage} alt="props urls"></img>
    </p>
  </figure>

  <div class="media-content">
    <div class="content">
       <p>
       <a className="has-text-light" href={props.url}> {props.description}</a>
</p>
   </div>


  </div>

</article>

  </div>

</div>

    </>
  );
};
export default Articles
;