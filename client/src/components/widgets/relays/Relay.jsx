import React from 'react';
import './Relay.css'

const Relay = (props) => {
    const { relay } = props;
    console.log(relay);
    return (
        <div className="single-switch" id={"switch-" + relay.switchNumber}>
            <div className="switch-name">
                <div>{relay.name}</div>
            </div> 
            <div className="switch-toggle">
                <label className="switch" id={relay.swtichNumber}>
                    <input type="checkbox" className="relay-btn switch-btn" data-switch={relay.switchNumber} defaultChecked={relay.status} onChange={() => props.onToggle(relay.switchNumber)} />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    );
}
 
export default Relay;