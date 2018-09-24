import React, { Component } from 'react';
import axios from 'axios';

class News extends Component {
    state = {
        apiCall: 'https://newsapi.org/v2/top-headlines?sources=the-globe-and-mail&apiKey=85aa17b353774f9fa7d6360459e6673d',
        apiLoad: false,
        error: false,
        news: []
    }
    render() { 
        return ( 
            <div id="news">
                {this.state.news.map((article, i) => {
                    return (
                        <div className="news-article" key={i}>
                            <img className="news-image" src="" alt="" />
                            <h2 className="news-headline">{article.title}</h2>
                            <span className="news-summary">{article.description}</span>
                        </div>
                    )
                })}
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