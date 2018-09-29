const data = require("../models/data");
const relayControl = require("../raspberry-pi/relayControl");
const scraper = require("./scraper");

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

  app.get("/api/weather/", (req, res) => {
    res.json(data.weather);
  });

  app.get("/api/climate-control/", (req, res) => {
    res.send("climate controller page");
  });
};

module.exports = routes;
