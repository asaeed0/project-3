import React, { Component } from 'react';

class Dashboard extends Component {
    state = {
        temperature: '00',
        whoIsHome: ['Nick', 'Thick'],
    }
    
    render() { 
        return (
            <div id="dashboard">
                <div id="dashboard-temperature">{this.state.temperature}°C</div>
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