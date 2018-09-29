import React, { Component } from 'react';
import axios from 'axios';
import './NewsWidget.css';
import Headlines from './Headlines'
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Article from './Article';

class NewsWidget extends Component {
    state = { 
        apiCall: 'https://newsapi.org/v2/top-headlines?sources=the-globe-and-mail&apiKey=85aa17b353774f9fa7d6360459e6673d',
        articles: [],
     }
    handleClickArticle = (articleArrIndex) => {
        const loadPage = "http://localhost:3000/news/" + articleArrIndex.toString();
        console.log(loadPage);
        window.location.assign(loadPage);
    }
    render() {
        console.log(this.state.articles);
        return (
            <BrowserRouter>
                <div id="news-widget" >
                    <h2>News</h2>
                    <Route exact path="/news" render={(props) => <Headlines {...props} articles={this.state.articles} clickArticle={this.handleClickArticle}/> } />
                    <Route exact path="/news/:id" render={(props) => <Article {...props} articles={this.state.articles}/> } />

                </div>
            </BrowserRouter>
        );
    }
    async componentDidMount() {
        const { data: response } = await axios.get(this.state.apiCall);
        this.setState({articles: response.articles});
        console.log('News API call successful');
    } 
}
 
export default NewsWidget;