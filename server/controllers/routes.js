const data = require("../models/data");

const routes = app => {
  app.get("/api/", (req, res) => {
    res.json(data);
  });

  app.get("/api/relay-control/", (req, res) => {
    res.json(data);
  });

  app.get("/api/climate-control/", (req, res) => {
    res.send("climate controller page");
  });
};

module.exports = routes;
