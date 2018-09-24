import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {
    state = { 
        apiCall:'http://dataservice.accuweather.com/currentconditions/v1/55488?apikey=b6myurKAMGUZIjoWJ7Xf6XYQAP45lhOg',
        apiLoad: false,
        error: false,
     }
    render() { 
        return ( 
            <div id="widget-weather">
                {!this.state.apiLoad ? <span id="weather-preload">Loading...</span> : null}
                {this.state.error ? <span id="weather-preload">There was a problem</span> : null}
                
                {this.state.weather ? <span id="weather-summary">Summary: {this.state.weather.WeatherText}</span> : null}
                <br/>
                {this.state.weather ? <span id="weather-temperature">Temperature: {this.state.weather.Temperature.Metric.Value}</span> : null}
                <br/>
                {this.state.weather ? <span id="weather-realfeel">Real Feel: {/* this.state.weather.Temperature.Metric.Value */}</span> : null}
                <br/>
                {this.state.weather ? <span id="weather-humidity">Humidity: {/* this.state.weather */}</span> : null}
                <br/>
                {this.state.weather ? <span id="weather-precipitation">Chance of Rain: {/* this.state.weather */}</span> : null}
            </div>
         );
    }

    async componentDidMount() {
        const { data: response } = await axios.get(this.state.apiCall);
        this.setState({apiLoad: true, weather: response[0]});
        console.log('Weather API call successful');
    }   
}
 
export default Weather;