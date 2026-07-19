import express from "express";
import upload from "../middleware/upload.middleware.js";
import {
    getRoomImagesController,uploadRoomImageController, updateRoomImagesController
} from "../controllers/roomImage.controllers.js";

const router = express.Router();

router.get("/getAllRoomImages", getRoomImagesController);

router.post(
    "/upload",
    upload, // maximum 10 images
    uploadRoomImageController
);
router.put(
  "/uploadImages/byRoomId/:roomId",
  upload,
  updateRoomImagesController
);

// router.get("/:roomId", getRoomImages);

// router.delete("/:id", deleteRoomImage);

export default router;