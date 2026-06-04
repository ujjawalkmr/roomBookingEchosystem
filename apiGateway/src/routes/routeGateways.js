const express = require("express");
const router = express.Router();
const propertyProxy = require("../proxies/property.proxy");



router.use("/properties", propertyProxy);



module.exports = router;