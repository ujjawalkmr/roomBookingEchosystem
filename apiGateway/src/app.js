const express = require("express");
const cors = require("cors");

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const routes = require("./routes/routeGateways");

const app = express();

app.use(cors());

app.use(express.json());

app.use(logger);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API Gateway Running"
  });
});

app.use("/api", routes);

app.use(errorHandler);

module.exports = app;