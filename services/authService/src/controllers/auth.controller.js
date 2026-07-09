import User from "../models/user.model.js";

import { sendOtp, verifyOtp } from "../services/otp.service.js";

import {
  createPassword,
  loginUser,
  logoutService,
} from "../services/auth.service.js";

export const sendOtpController = async (req, res) => {
  try {
    const { email } = req.body;
    const exists = await User.findOne({
      email,
    });

    if (exists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    await sendOtp(email);

   return res.json({ status: "SUCCESS", message: "OTP sent successfully" });
  } catch (error) {
   return res.status(500).json({ status: "FAILURE", message: error.message });
  }
};

export const verifyOtpController = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }
    const valid = await verifyOtp(email, otp);

    if (!valid) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

   return res.json({ status: "SUCCESS", message: "OTP Verified" });
  } catch (error) { 
      return  res.status(400).json({ status: "FAILURE", message: error.message });

  }
};

export const createPasswordController = async (req, res) => {
  try {
    const { email, password, confirmPassword, userName } = req.body;
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ status: "FAILURE", message: "Passwords do not match" });
    }

    await createPassword(email, password, userName);

  return  res.status(201).json({ status: "SUCCESS", message: "Account Created" });
  } catch (error) {
   return res.status(400).json({ status: "FAILURE", message: error.message });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await loginUser(email, password);

   return res.status(200).json({ data: result, status: "SUCCESS" });
  } catch (error) {
   return res.status(400).json({ status: "FAILURE", message: error.message });
  }
};

export const logoutController = async (req, res) => {
  try {
    const { id } = req.user;

    const isLogout = await logoutService(id);
    if (isLogout) {
    return  res.status(200).json({
        status: "SUCCESS",
        message: "Logged out successfully",
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: "FAILURE",
      message: error.message,
    });
  }
};
