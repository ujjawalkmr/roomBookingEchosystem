import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.config.js";

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "room-booking-echo/room-images",
        allowed_formats: ["jpg", "jpeg", "png", "webp","svg"],
    },
});

const upload = multer({ storage });

export default upload;