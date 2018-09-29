import React, { Component } from 'react';
import axios from 'axios';
import './Article.css'

class Article extends Component {
    state = { articleContent: [] }
    render() { 
        const article = this.props.articles[this.props.match.params.id];
        return (
            <div id="article">
                <div id="article-headline">
                    <div>{this.props.articles.length > 1 ? article.title : null}</div>
                </div>
                <div id="article-body">
                    <div id="article-image" >
                        <img src={this.props.articles.length > 1 ? article.urlToImage : null} alt="Hello" width="100%" />
                    </div>
                    <div id="article-content">
                        {this.state.articleContent.map((para, i) =>  <p key={i}>{para}</p> )}
                    </div>
                </div>
            </div>
        );
    }
    async componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps && nextProps.articles.length > 1) {
            const article = nextProps.articles[nextProps.match.params.id];
            const { data: apiResponse } = await axios.post('/api/news/article-scrape', { scrapeUrl: article.url});
            this.setState({articleContent: apiResponse});
            console.log('News Article API call successful');
           }
    }
}
 
export default Article;