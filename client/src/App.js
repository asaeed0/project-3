import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";

//  Summary Elements
// import Weather from "./components/Weather";
import News from "./components/News";
import Greeting from "./components/Greeting";
import Dashboard from "./components/Dashboard";
import Calendar from "./components/Calendar";

//  Widgets
import RelayWidget from "./components/widgets/relays/RelayWidget";
import CalendarWidget from "./components/widgets/calendar/CalendarWidget";
import WeatherWidget from "./components/widgets/weather/WeatherWidget";
import NewsWidget from "./components/widgets/news/NewsWidget";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Dashboard />
          {/* <Weather /> */}
          <Route path="/relay" exact component={RelayWidget} />
          <Route path="/calendar" exact component={CalendarWidget} />
          <Route path="/weather" exact component={WeatherWidget} />
          <Route path="/news" exact component={NewsWidget} />
          <Route path="/" exact component={Greeting} />
          <Calendar />
          <News />}
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
