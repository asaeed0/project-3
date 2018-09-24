import React, { Component } from 'react';
import { getTime } from '../functions';

class Clock extends Component {
    state = { 
        time: getTime()
     }
    render() { 
        return (
            <div id="clock">
                <span>{this.state.time}</span>
            </div>
        );
    }

    componentDidMount() {
        // let time;
        this.time = setInterval(()=> {
            let currentTime = getTime();
            if(this.state.time !== currentTime) {
                this.setState({ time: currentTime });
            }
        }, 1 * 1000)
    }
}
 
export default Clock;