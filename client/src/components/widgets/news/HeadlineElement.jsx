import React from 'react';
import './HeadlineElement.css'

const HeadlineElement = (props) => {
    const { article } = props;
    return (
        <div className="headline-element-article" key={props.i} onClick={() => props.clickArticle(props.i)}>
            <div className="headline-element-grid">
                <div className="headline-element-image" >
                    <img src={article.urlToImage} alt="Hello" width="100%" />
                </div>
                <div className="headline-element-headline">
                    <div>{article.title}</div>
                </div>
                <div className="headline-element-description">{article.description}</div>
            </div>
            <hr />
        </div>
    );
}

export default HeadlineElement;