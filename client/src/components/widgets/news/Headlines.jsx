import React from 'react';
import HeadlineElement from './HeadlineElement';
import './Headlines.css'


const Headlines = (props) => {
    const headlines = props.articles;
    return (
        <div id="headline">
            <div id="headlines-heading"></div>
            <div id="headlines-body">
                {headlines.map( (article, i) => <HeadlineElement article={article} key={i} i={i} clickArticle={props.clickArticle} />)}
            </div>
        </div>
    );
}
 
export default Headlines;