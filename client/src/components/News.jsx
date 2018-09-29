import React, { Component } from 'react';
import './News.css'
import axios from 'axios';

class News extends Component {
    state = {
        apiCall: 'https://newsapi.org/v2/top-headlines?sources=the-globe-and-mail&apiKey=85aa17b353774f9fa7d6360459e6673d',
        apiLoad: false,
        error: false,
        news: []
    }

    handleClick() {
        window.location.assign("http://localhost:3000/news/")
    }

    render() { 
        return ( 
            <div id="news-summary" onClick={() => this.handleClick()}>
                <div id="news-heading">News</div>
                <div id="news-body">
                    {this.state.news.map((article, i) => {
                        return (
                            <div className="news-article" key={i}>
                                <div className="news-image" >
                                    <img src={article.urlToImage} alt="Hello" width="100%" />
                                </div>
                                <div className="news-headline">{article.title}</div>
                                <hr />
                            </div>
                        )
                    })}
                </div>
            </div>
         );
    }

    async componentDidMount() {
        const { data: response } = await axios.get(this.state.apiCall);
        const articles = response.articles;
        this.setState({apiLoad: true, news: articles});
        console.log('News API call successful');
    } 
}
 
export default News;