import React, { Component } from 'react';
import './Headlines.css'

class Headlines extends Component {
    state = {
        headlines: [],
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.headlines !== this.props.articles){
            this.setState({headlines:nextProps.articles});
        }
    }
    render() {
        const { headlines } = this.state;
        return (
            <div id="headline">
                <div id="headlines-heading"></div>
                <div id="headlines-body">
                    {headlines.map( (article, i) => {
                        return (
                            <div className="headlines-article" key={i}>
                                <div className="headlines-grid" onClick={() => this.clickArticle(i)}>
                                    <div className="headlines-image" >
                                        <img src={article.urlToImage} alt="Hello" width="100%" />
                                    </div>
                                    <div className="headlines-headline">
                                        <div>{article.title}</div>
                                    </div>
                                    <div className="headlines-description">{article.description}</div>
                                </div>
                                <hr />
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}
 
export default Headlines