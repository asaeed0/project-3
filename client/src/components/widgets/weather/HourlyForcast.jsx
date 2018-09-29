import React, { Component } from 'react';
import './HourlyForcast.css'

class HourlyForcast extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <div>Image</div>
                <div>Description</div>
                <div>Temperature</div>
                <div>Real Feel</div>
                <div>Humidity</div>
                <div>Chance of rain</div>
                <div>UV Index</div>
                <hr />
            </React.Fragment>
        );
    }
}
 
export default HourlyForcast;