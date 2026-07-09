import express from "express";
import { getAllHotelsController } from "../controllers/hotel.controllers.js";


const router = express.Router();



const rootRoute = "/getHotels";
router.get(rootRoute, getAllHotelsController);



export default router;