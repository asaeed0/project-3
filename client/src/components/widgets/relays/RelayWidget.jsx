import React, { Component } from 'react';
import './RelayWidget.css'
import Relay from './Relay'
import axios from 'axios'
import PresetBtn from './PresetBtn';


class RelayWidget extends Component {
    state = {
        presets: [],
        relays: [],
    }
    handleToggle = async (relay) => {
        const { data: apiResponse } = await axios.post('/api/relay-control/relay', { switchNumber: relay });
        this.setState({ relays: apiResponse});
    }
    handlePreset = async (presetId) => {
        const { data: apiResponse } = await axios.post('/api/relay-control/preset', { presetId: presetId});
        this.setState({ relays: apiResponse});
    }
    render() {
        const { presets, relays } = this.state;
        return (
            <div id="relay-widget">
                <div id="relay-heading">Relay Switch</div>

                <div id="relay-presets">
                    {presets.map((preset, i) => {
                        return <PresetBtn preset={preset} onToggle={this.handlePreset} key={i} />
                    })}
                </div>

                <div id="relay-relays">
                    {relays.map((relay, i) => {
                        return <Relay relay={relay} onToggle={this.handleToggle} key={i} />
                    })}
                </div>
            </div>
        );
    }

    async componentDidMount() {
        const { data: apiResponse } = await axios.get('/api/relay-control/');
        this.setState({ presets: apiResponse.presets, relays: apiResponse.relays })
    }

}
 
export default RelayWidget;