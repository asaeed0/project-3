import React, { Component } from 'react';
import './Relay.css'

class Relay extends Component {

    state = {
        relay: this.props.relay,
        i: this.props.i,
    }
    render() {
        const { relay } = this.state;

        return (
            <div className="single-switch" key={this.state.i} id={"switch-" + relay.switchNumber}>
                <span className="switch-name">{relay.name}</span> 
                <label className="switch" id={relay.swtichNumber}>
                    <input type="checkbox" className="relay-btn switch-btn" data-switch={relay.switchNumber} defaultChecked={relay.status} onChange={() => this.props.onToggle(relay.switchNumber)} />
                    <span className="slider round"></span>
                </label>
            </div>
        );
    }
}
 
export default Relay;