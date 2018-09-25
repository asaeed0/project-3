import React, { Component } from "react";
import "./App.css";
import Weather from "./components/Weather";
import Clock from "./components/Clock";
import News from "./components/News";
import Relay from "./components/Relay";
import Greeting from "./components/Greeting";
import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Clock />
        <Weather />
        <Dashboard />
        <Greeting />
        <News />
        <Relay />
      </React.Fragment>
    );
  }
}

export default App;
