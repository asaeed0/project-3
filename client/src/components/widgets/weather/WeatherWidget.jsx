import React, { Component } from 'react';
import './WeatherWidget.css';
import HourlyForcast from './HourlyForcast';

class WeatherWidget extends Component {
    state = {  }
    render() { 
        return (
            <div id="weather-widget" >
                <h2>Weather</h2>

                <HourlyForcast />
            </div>
        );
    }
}
 
export default WeatherWidget;