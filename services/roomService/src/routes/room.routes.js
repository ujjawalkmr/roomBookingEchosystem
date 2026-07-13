import express from "express";
import { getAllRoomsController } from "../controllers/room.controllers.js";


const router = express.Router();



const rootRoute = "/getRooms";
router.get(rootRoute, getAllRoomsController);



export default router;