const data = require("../models/data");
const relayControl = require("../raspberry-pi/relayControl");

const routes = app => {
  app.get("/api/", (req, res) => {
    res.json(data);
  });

  //  RELAY ROUTING
  app.get("/api/relay-control/", (req, res) => {
    res.json(relayControl.returnRelaysClean());
  });

  app.post("/api/relay-control/", (req, res) => {
    //  Prep incoming data - SwitchNumber
    const switchNumber = parseInt(req.body.switchNumber);
    //  We toggle the switch and are returned the time it was toggled
    const toggleTimestamp = relayControl.toggleRelay(switchNumber);
    // We get the refreshed state of our relays
    const refreshedRelays = relayControl.returnRelaysClean();
    //  From the array of relays we extract the one that was toggled
    /* const toggledRelay = refreshedRelays.filter(relay => {
      return relay.switchNumber === switchNumber;
    }); */
    res.json([toggleTimestamp, refreshedRelays]);
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
