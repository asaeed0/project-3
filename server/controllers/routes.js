const rasp = require("../raspberry-pi/rasp");
const data = require("../models/data");

const routes = app => {
  app.get("/api/", (req, res) => {
    res.json(data);
  });

  app.get("/api/relay-control/", (req, res) => {
    res.json(data.pins);
  });

  app.post("/api/relay-control/", (req, res) => {
    (async switchNumber => {
      console.log(switchNumber);
      // res.send("hello mars");

      const handlerResponse = await rasp.handleRelayClick(switchNumber);
      if (handlerResponse === false) {
        res.send("error");
      } else {
        res.send(handlerResponse);
      }
    })(req.body.switchNumber);
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
