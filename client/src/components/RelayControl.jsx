import React, { Component } from 'react';
import './RelayControl.css'
import Relay from './Relay'


class RelayControl extends Component {
    state = { relays: [] }
    render() { 
        // Filters through the pins to create an array of only the active pins
        const activePins = this.state.relays.filter(relay => {
            return (relay.active);
        });
        
        return (
            <div id="relay">
                <h2>Relay Switch</h2>

                <div id="relay-presets">
                    <button id="relay-btn-energy" >Energy Saver</button>
                    <button id="relay-btn-evening" >Evening</button>
                    <button id="relay-btn-night" >Night</button>
                </div>

                {activePins.map((relay, i) => {
                    return (
                        <Relay relay={relay} i={i} key={i} />
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
 
export default RelayControl;