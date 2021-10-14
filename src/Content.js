import React from "react";
import { DateTime } from 'luxon';


const Content
 = (props) => {
  return (
    < >
<div className="
has-text-weight-light
columns
is-mobile
scrolling-wrapper
scrollbar-hidden
 ">

 <div className="column

"
>



<article class="message is-primary">

  <div class="message-header">

    <p>{props.title}</p>
  </div>
  <div class="message-body">
  <img src={props.urlToImage} alt="props urls"></img>



  <a href={props.url}> {props.description}</a>


  <p className="is-italic subtitle is-7">
{props.name}.
<br/>
       Last Updated: {DateTime.fromISO(props.publishedAt).toFormat('LLLL dd yyyy')}
      </p>
  </div>
</article>




  </div>











</div>

    </>
  );
};
export default Content
;