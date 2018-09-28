import React, { Component } from 'react';
import './Dashboard.css'

class Dashboard extends Component {
    state = {
        temperature: '21',
        humidity: '00',
        whoIsHome: ['Nick', 'Thick'],
    }
    
    render() { 
        return (
            <div id="dashboard-summary">
                <div id="dashboard-heading">Dashboard</div>
                <div id="dashboard-temperature">Temperature: {this.state.temperature}°C</div>
                <div id="dashboard-temperature">Humidity: {this.state.humidity}</div>
                <div id="dashboard-who-is-home">
                    {this.state.whoIsHome.map(person => {
                        return (`${person}, `);
                    })}
                </div>
            </div>
        );
    }
}
 
export default Dashboard;