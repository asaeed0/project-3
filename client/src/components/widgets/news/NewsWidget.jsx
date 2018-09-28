import React, { Component } from 'react';
import axios from 'axios';
import './NewsWidget.css';
// import Headlines from './Headlines'
import Article from './Article';

class NewsWidget extends Component {
    state = { 
        apiCall: 'https://newsapi.org/v2/top-headlines?sources=the-globe-and-mail&apiKey=85aa17b353774f9fa7d6360459e6673d',
        articles: [],
     }
    render() {
        console.log(this.state.articles);
        return (
            <div id="news-widget" >
                <h2>News</h2>
                {/* <Headlines articles={this.state.articles}/> */}
                <Article articles={this.state.articles} id={2}/>
            </div>
        );
    }
    async componentDidMount() {
        const { data: response } = await axios.get(this.state.apiCall);
        this.setState({articles: response.articles});
        console.log('News API call successful');
    } 
}
 
export default NewsWidget;