import React, { Component } from 'react';

const greetings = [
    "Hello World",
    "Hello Mars",
    "Hello Idiot",
    "Hows it going?",
    "Whats up?"
];

class Greeting extends Component {
    state = {
        greeting: '',
    }

    render() { 
        return (
            <div id="greeting">
                <h1>{this.state.greeting}</h1>
            </div>
        );
    }

    componentDidMount() {
        let greeting = greetings[ Math.floor( Math.random() * greetings.length) ];
        this.setState({greeting: greeting})
    }
}
 
export default Greeting;