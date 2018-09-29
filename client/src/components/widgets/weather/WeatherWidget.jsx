import React, { Component } from 'react';
import HourlyForcast from './HourlyForcast';
import './WeatherWidget.css';
import axios from 'axios'

class WeatherWidget extends Component {
    state = { forecast: [] }
    render() { 
        return (
            <div id="weather-widget" >
                <h2>Weather</h2>
                {this.state.forecast.map((hourForecast, i) => {
                    return (
                    <HourlyForcast weather={hourForecast} key={i} />
                    )
                })}
            </div>
        );
    }
    async componentDidMount() {
        const { data: apiResponse } = await axios.get('/api/weather/forecast');
        console.log(apiResponse);
        this.setState({forecast : apiResponse})
    }
}
 
export default WeatherWidget;