import React, { Component } from 'react';
import axios from 'axios';
import './Weather.css'
class Weather extends Component {
    state = {
        apiLoad: false,
        error: false,
     }
    render() {

        const { weather } = this.state;

        return ( 
            <div id="widget-weather">
                {!this.state.apiLoad ? <span id="weather-preload">Loading...</span> : null}
                {this.state.error ? <span id="weather-preload">There was a problem</span> : null}
            
                <div id="weather-icon">{weather ? <img src={"https://developer.accuweather.com/sites/default/files/" + weather.WeatherIcon + "-s.png"} alt="weather icon" /> : null}</div>
                <div id="weather-temperature">{weather ? "Temperature: " + weather.Temperature.Metric.Value : null}</div>
                <div id="weather-real-feel">{weather ? "Real Feel: " + weather.RealFeelTemperature.Metric.Value : null}</div>
                <div id="weather-humidity">{weather ? "Humidity: " + weather.RelativeHumidity : null}</div>
                <div id="weather-precipitation">{weather ? "Chance of Rain: " + weather.Temperature.Metric.Value : null}</div>
                <div id="weather-summary">{weather ? weather.WeatherText : null}</div>
            </div>
         );
    }

    async componentDidMount() {
        //  We get the external API details from our own API
        const apiResponse = await fetch('/api/weather');
        const weather = await apiResponse.json();

        //  Makes the API Call
        const { data: response } = await axios.get(weather.apiCall);

        // Preps the response
        // We convert the weather Icon from an int to a string and
        // add '0' for numbers less than '10'  (7 -> '07')
        const weatherRaw = response[0];
        weatherRaw.WeatherIcon = (weatherRaw.WeatherIcon < 10) ? ('0' + weatherRaw.WeatherIcon.toString()) : weatherRaw.WeatherIcon.toString();


        this.setState({apiLoad: true, weather: weatherRaw});
        console.log('Weather API call successful');
    }   
}
 
export default Weather;