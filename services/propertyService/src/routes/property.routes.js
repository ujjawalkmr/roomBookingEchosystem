import express from "express";

import {
  getAllProperties,
} from "../controllers/property.controllers.js";
const router = express.Router();


const rootRoute = "/getProperty";
router.get(rootRoute, getAllProperties);
router.get("/getProperty/:id", getAllProperties);



export default router;