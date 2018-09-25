import React, { Component } from 'react';

const pins = [
    {
      gpioNumber: 29,
      switchNumber: 1,
      active: true,
      status: false
    },
    {
      gpioNumber: 31,
      switchNumber: 2,
      active: true,
      status: false
    },
    {
      gpioNumber: 33,
      switchNumber: 3,
      active: true,
      status: false
    },
    {
      gpioNumber: 35,
      switchNumber: 4,
      active: true,
      status: false
    },
    {
      gpioNumber: 37,
      switchNumber: 5,
      active: false,
      status: false
    },
    {
      gpioNumber: 39,
      switchNumber: 6,
      active: false,
      status: false
    },
    {
      gpioNumber: 0,
      switchNumber: 7,
      active: false,
      status: false
    },
    {
      gpioNumber: 0,
      switchNumber: 8,
      active: false,
      status: false
    },
    {
      gpioNumber: 0,
      switchNumber: 9,
      active: false,
      status: false
    },
    {
      gpioNumber: 0,
      switchNumber: 10,
      active: false,
      status: false
    },
    {
      gpioNumber: 0,
      switchNumber: 11,
      active: false,
      status: false
    },
    {
      gpioNumber: 0,
      switchNumber: 12,
      active: false,
      status: false
    },
    {
      gpioNumber: 0,
      switchNumber: 13,
      active: false,
      status: false
    },
    {
      gpioNumber: 0,
      switchNumber: 14,
      active: false,
      status: false
    },
    {
      gpioNumber: 0,
      switchNumber: 15,
      active: false,
      status: false
    },
    {
      gpioNumber: 0,
      switchNumber: 16,
      active: false,
      status: false
    }
];


class Relay extends Component {
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
                        <div className="single-switch" key={i}>
                            <span className="switch-name">Relay {relay.switchNumber}: </span> 
                            <label className="switch" id={relay.swtichNumber}>
                                <input type="hidden" className="relay-btn" value="0" />
                                <input type="checkbox" className="relay-btn switch-btn" data-switch={relay.switchNumber} value="1" />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    )
                })}
            </div>
        );
    }

    componentDidMount() {
        /* 
        fetch('/api/relay-control')
            .then(res => {
                console.log(res);
                return res.json;
            })
            .then(pins => {
                console.log(pins)
                // this.setState({ relays: pins })
            })
            // .then(pins => this.setState({ relays: pins }))
        */
       this.setState({ relays: pins })
    }
}
 
export default Relay;