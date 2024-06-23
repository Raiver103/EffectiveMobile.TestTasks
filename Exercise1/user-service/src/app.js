const express = require("express");
const bodyParser = require("body-parser");
const { createConnection } = require("typeorm");
const userRoutes = require("./routes/user.routes");
require("reflect-metadata");
const ormconfig = require('./ormconfig');

const app = express();
app.use(bodyParser.json());
app.use("", userRoutes);

createConnection(ormconfig).then(() => {
  app.listen(3001, () => {
    console.log("User service is running on port 3001");
  });
});