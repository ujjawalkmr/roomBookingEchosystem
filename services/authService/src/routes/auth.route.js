import express from "express";
import { validateJson,authMiddleware } from "../middleware/auth.middleware.js";

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

router.post("/login", validateJson, loginController);

//router.post("/logout",authMiddleware, logoutController);

export default router;
//when i call logut then may be it chance to token expire sor call refresh token api ,
// so create api for generatetoke for get token by refresh token
// can confirm refresh toke create has seperate api generate.
// to call when toke expaire.
// confirm this process i s ok or not.