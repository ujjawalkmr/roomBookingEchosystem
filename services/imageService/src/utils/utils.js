import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.config.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "room-booking-echo/room-images",
    allowed_formats: ["jpg", "jpeg", "png", "webp", "svg","avif"],
  },
});

const multerUpload = multer({
  storage,
   limits: {
    files: 10, // Maximum 10 files
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
        "image/svg+xml",
      "image/avif",
    ];

    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only JPG, JPEG, PNG, WEBP and SVG files are allowed."));
    }
  },
});



export  {multerUpload};