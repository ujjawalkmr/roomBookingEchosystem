import express from "express";
import upload from "../middleware/upload.middleware.js";
import {
    getRoomImagesController,uploadRoomImageController
} from "../controllers/roomImage.controllers.js";

const router = express.Router();

router.get("/getAllRoomImages", getRoomImagesController);

router.post(
    "/upload",
    upload.array("images", 10), // maximum 10 images
    uploadRoomImageController
);

// router.get("/:roomId", getRoomImages);

// router.delete("/:id", deleteRoomImage);

export default router;