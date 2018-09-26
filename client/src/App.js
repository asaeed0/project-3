import React, { Component } from "react";
import "./App.css";
import Weather from "./components/Weather";
import News from "./components/News";
import RelayControl from "./components/RelayControl";
// import Greeting from "./components/Greeting";
import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return (
      <div id="app">
        <Dashboard id="app-dashboard" />
        <Weather id="app-weather" />
        <RelayControl />
        {/* <Greeting id="app-greeting" /> */}
        <div id="app-calendar">CALENDAR</div>
        <News id="app-news" />
      </div>
    );
  }
}

export default App;
