import express from "express";
import { validateJson } from "../middleware/auth.middleware.js";

import {
  sendOtpController,
  verifyOtpController,
  createPasswordController,
  loginController,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/send-otp", validateJson, sendOtpController);

router.post("/verify-otp", validateJson, verifyOtpController);

router.post("/create-password", validateJson, createPasswordController);

router.post("/login", loginController);

export default router;
