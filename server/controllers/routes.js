const data = require("../models/data");
const relayControl = require("../raspberry-pi/relayControl");
const axios = require("axios");
const scraper = require("./scraper");
const weatherCurrentDummy = require("./apiDummy/weather_current");
const weatherForecastDummy = require("./apiDummy/weather_forecast");

const routes = app => {
  app.get("/api/", (req, res) => {
    res.json(data);
  });

  //  RELAY ROUTING
  app.get("/api/relay-control/", (req, res) => {
    const relays = relayControl.returnRelaysClean();
    const presets = relayControl.returnPresetsClean();
    res.json({ relays: relays, presets: presets });
  });

  app.post("/api/relay-control/relay", (req, res) => {
    //  Prep incoming data - SwitchNumber
    const switchNumber = parseInt(req.body.switchNumber);
    //  We toggle the switch
    relayControl.toggleRelay(switchNumber);
    // We get the refreshed state of our relays
    const refreshedRelays = relayControl.returnRelaysClean();
    //  From the array of relays we extract the one that was toggled
    res.json(refreshedRelays);
  });

  app.post("/api/relay-control/preset", (req, res) => {
    //  Prep incoming data - presetId
    const presetId = parseInt(req.body.presetId);
    //  We toggle the preset
    relayControl.togglePreset(presetId);
    // We get the refreshed state of our relays
    const refreshedRelays = relayControl.returnRelaysClean();
    //  From the array of relays we extract the one that was toggled
    res.json(refreshedRelays);
  });

  //  NEWS ROUTING
  app.post("/api/news/article-scrape", (req, res) => {
    //  Prep incoming data - scrapeUrl
    const scrapeUrl = req.body.scrapeUrl;
    scraper(scrapeUrl).then(scrapedArticle => res.send(scrapedArticle));
  });

  app.get("/api/greetings/", (req, res) => {
    res.json(data.userSettings.greetings);
  });

  app.get("/api/weather/current", (req, res) => {
    const apiUrl = data.weather.apiCall.current;
    /* 
    axios.get(apiUrl).then(response => {
      const apiResponse = response.data;
      res.json(apiResponse);
    });
    */
    res.json(weatherCurrentDummy);
  });

  app.get("/api/weather/forecast", (req, res) => {
    const apiUrl = data.weather.apiCall.forecast;
    /* 
    axios.get(apiUrl).then(response => {
      const apiResponse = response.data;
      res.json(apiResponse);
    });
    */
    res.json(weatherForecastDummy);
  });

  app.post("/api/calendar/", (req, res) => {
    const checkDate = req.body.checkDate;
    console.log(checkDate);
  });
};

module.exports = routes;
