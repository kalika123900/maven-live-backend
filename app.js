const express = require("express");
const app = express();
// sdf

const port = process.env.PORT || 9000;
const path = require("path");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");
const db = require("./models");
const apiRoutes = require("./routes");

const environment = process.env.NODE_ENV || "development";

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

db.sequelize
  .authenticate()
  .then(() => {
    console.log("DATABASE CONNECTED");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api", apiRoutes);

app.use("/public", express.static("public"));

app.listen(port, () => {
  console.log(`server is listening on Port  ${port}`);
});
