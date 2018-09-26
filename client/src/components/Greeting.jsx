import React, { Component } from 'react';
import './Greeting.css'
import Clock from './Clock'

class Greeting extends Component {
    state = {
        greeting: '',
    }

    render() { 
        return (
            <div id="widget-greeting">
                <span id="greeting-text">{this.state.greeting}</span>
                <Clock />
            </div>
        );
    }

    async componentDidMount() {
        const response = await fetch('/api/greetings');
        const greetings = await response.json();
        const greeting = greetings[ Math.floor( Math.random() * greetings.length) ];
        this.setState({greeting: greeting})
    }
}
 
export default Greeting;