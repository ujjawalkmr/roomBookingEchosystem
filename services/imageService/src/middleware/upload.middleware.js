import multer from "multer";
import { multerUpload } from "../utils/utils.js";

const upload = (req, res, next) => {
  multerUpload.array("images", 10)(req, res, (err) => {
    if (err) {
      if (err instanceof multer.MulterError) {
        if (err.code === "LIMIT_FILE_COUNT") {
          return res.status(400).json({
            success: false,
            message: "You can upload a maximum of 10 images.",
          });
        }
      }

      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }

    next();
  });
};

export default upload;


