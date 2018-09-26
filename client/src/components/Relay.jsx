import React, { Component } from 'react';
import './Relay.css'
import axios from 'axios'

class Relay extends Component {

    state = {
        switchNumber: this.props.relay.switchNumber,
        status: this.props.relay.status,
        i: this.props.i,
    }

    relayClick = async (e, relay) => {
        const { data: apiResponse } = await axios.post('/api/relay-control/', { switchNumber : relay });
        console.log(apiResponse);

        this.setState({status: !this.state.status});
        console.log("Clicked relay " + relay + " and changed its state to -> " + this.state.status);
    }

    render() {
        const relay = this.state;

        return (
            <div className="single-switch" key={relay.i} id={"switch-" + relay.switchNumber}>
                <span className="switch-name">Relay {relay.switchNumber}: </span> 
                <label className="switch" id={relay.swtichNumber}>
                    <input type="checkbox" className="relay-btn switch-btn" data-switch={relay.switchNumber} defaultChecked={relay.status} onChange={(e) => this.relayClick(e, relay.switchNumber)} />
                    <span className="slider round"></span>
                </label>
            </div>
        );
    }
}
 
export default Relay;