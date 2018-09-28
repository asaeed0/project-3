import React, { Component } from 'react';
import './RelayWidget.css'
import Relay from './Relay'
import axios from 'axios'


class RelayWidget extends Component {
    state = {
        timestamp: null,
        relays: []
    }
    handleToggle = async (relay, timestamp=this.state.timestamp) => {
        const { data: apiResponse } = await axios.post('/api/relay-control/', { switchNumber : relay, timestamp: timestamp, });
        const updatedTimestamp = apiResponse[0];
        const updatedRelays = apiResponse[1];

        this.setState({ timestamp: updatedTimestamp, relays: updatedRelays});
    }
    render() {
        return (
            <div id="relay-widget" data-timestamp={this.state.timestamp} >
                <h2>Relay Switch</h2>

                <div id="relay-presets">
                    <button id="relay-btn-energy" >Energy Saver</button>
                    <button id="relay-btn-evening" >Evening</button>
                    <button id="relay-btn-night" >Night</button>
                </div>

                {this.state.relays.map((relay, i) => {
                    return (
                        <Relay relay={relay} onToggle={this.handleToggle} i={i} key={i} />
                    )
                })}
            </div>
        );
    }

    async componentDidMount() {
        const response = await fetch('/api/relay-control');
        const body = await response.json();
        this.setState({ relays: body })
    }

}
 
export default RelayWidget;