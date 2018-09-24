import React, { Component } from "react";
import "./App.css";
import Weather from "./components/Weather";
import Clock from "./components/Clock";
import News from "./components/News";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Clock />
        <Weather />
        <News />
      </React.Fragment>
    );
  }
}

export default App;
