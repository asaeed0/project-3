/* ----------------------------------------------------------
    DEPENDENCIES
---------------------------------------------------------- */

//  Installed
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();

//  Controller
const routes = require("./controllers/routes.js");

/* ----------------------------------------------------------
    EXPRESS DEPLOYMENT
---------------------------------------------------------- */

//  Initialization
const app = express();

//  Port selection
app.set("port", process.env.PORT || 5000);

//  Body Parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* ----------------------------------------------------------
    ROUTING - EXPRESS
---------------------------------------------------------- */

//  Public Resources
// app.use(express.static(path.join(__dirname, "public")));

//  Routes
routes(app);

/* ----------------------------------------------------------
    PORT LISTENER
---------------------------------------------------------- */

app.listen(app.get("port"), () => {
  console.log(`Listening on port: ${app.get("port")}`);
});
