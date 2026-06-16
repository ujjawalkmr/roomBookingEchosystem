import express from "express";

import {
  sendOtpController,
  verifyOtpController,
  createPasswordController,
  loginController
} from "../controllers/auth.controller.js";

const router =
  express.Router();

router.post(
  "/send-otp",
  sendOtpController
);

router.post(
  "/verify-otp",
  verifyOtpController
);

router.post(
  "/create-password",
  createPasswordController
);

router.post(
  "/login",
  loginController
);

export default router;