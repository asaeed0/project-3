import React, { Component } from 'react';
import './RelayWidget.css'
import Relay from './Relay'


class RelayWidget extends Component {
    state = { relays: [] }
    render() {
        return (
            <div id="relay">
                <h2>Relay Switch</h2>

                <div id="relay-presets">
                    <button id="relay-btn-energy" >Energy Saver</button>
                    <button id="relay-btn-evening" >Evening</button>
                    <button id="relay-btn-night" >Night</button>
                </div>

                {this.state.relays.map((relay, i) => {
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
 
export default RelayWidget;