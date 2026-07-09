import express from "express";
import { getAllHotelBranchController } from "../controllers/hotelBranch.controllers.js";


const router = express.Router();



const rootRoute = "/getHotelBranches";
router.get(rootRoute, getAllHotelBranchController);



export default router;