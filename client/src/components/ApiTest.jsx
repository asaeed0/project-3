import React, { Component } from 'react';

class ApiTest extends Component {
    state = { 
        greeting: 'Hello World'
    }
    render() { 
        return (
            <div>
                {this.state.greeting}
            </div>
        );
    }

    componentDidMount() {
        fetch('/api/relay-control')
            .then(res => res.json())
            .then(settings => this.setState({ greeting: settings.greeting}));
    }

}
 
export default ApiTest;