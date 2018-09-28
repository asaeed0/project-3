import React, { Component } from 'react';
import './Article.css'

class Article extends Component {
    state = { 
        articles: this.props.articles,
        id: this.props.id
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.articles !== this.props.articles){
            this.setState({articles: nextProps.articles, id: nextProps.id});
        }
    }
    render() { 
        console.log(this.state);
        const article = this.state.articles[this.state.id];
        return (
            <div id="article">
                <div id="article-headline">
                    <div>{this.state.articles.length > 1 ? article.title : null}</div>
                </div>
                <div id="article-body">
                    <div id="article-image" >
                        <img src={this.state.articles.length > 1 ? article.urlToImage : null} alt="Hello" width="100%" />
                    </div>
                    <div id="article-content">{this.state.articles.length > 1 ? article.content : null}</div>
                </div>
            </div>
        );
    }
}
 
export default Article;