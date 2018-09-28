import React, { Component } from 'react';
import './Greeting.css'
import Clock from './Clock'

class Greeting extends Component {
    state = {
        greeting: '',
    }

    render() { 
        return (
            <div id="greeting-summary">
                <div id="greeting-text">
                    <h1>{this.state.greeting}</h1>
                    <Clock />
                </div>
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