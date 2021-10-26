import React, {useState, useEffect } from 'react';
import axios from 'axios';

require('dotenv').config()


const Article_LatLan = () => {

    const [articleData, setArticleData] = useState({articles:[]});

    const articleURL = `https://newsapi.org/v2/top-headlines?q=weather&apiKey=${process.env.REACT_APP_ARTICLE_API_KEY}`;


    useEffect(() => {

        const fetchData = async () => {
          const articleResult = await axios(articleURL);
          setArticleData(articleResult.data);
          console.log(articleResult.data)
        };
        fetchData();
      }, [ articleURL]);


  return (

    <>
<div>
<p className="has-text-centered title is-1 has-text-white">U.S. Weather News</p>

<div className="columns
">

<div className="column
is-flex

">
{articleData.articles && articleData.articles.splice(Math.random() * articleData.articles.length
).map(article => (

<div key={article}>
<div  className="column

">
  <img  src={article.urlToImage} alt="article headlines" width="100" height="200" />


<a classname=" has-text-light" alt="article icons" href={article.url}>{article.title}</a>


<p>Article Test</p>
</div>
</div>

))}
</div>
</div>
</div>

    </>
  );
};
export default Article_LatLan;