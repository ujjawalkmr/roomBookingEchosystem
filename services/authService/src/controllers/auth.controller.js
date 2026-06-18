import User from "../models/user.model.js";

import { sendOtp, verifyOtp } from "../services/otp.service.js";

import { createPassword, loginUser } from "../services/auth.service.js";

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

    res.json({ status: "SUCCESS", message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).json({ status: "FAILURE", message: error.message });
  }
};

export const verifyOtpController = async (req, res) => {
  const { email, otp } = req.body;

  const valid = await verifyOtp(email, otp);

  if (!valid) {
    return res.status(400).json({
      message: "Invalid OTP",
    });
  }

  res.json({ status: "SUCCESS", message: "OTP Verified" });
};

export const createPasswordController = async (req, res) => {
  try {
    const { email, password, confirmPassword,userName } = req.body;
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ status: "FAILURE", message: "Passwords do not match" });
    }

    await createPassword(email, password,userName);

    res.status(201).json({ status: "SUCCESS", message: "Account Created" });
  } catch (error) {
    res.status(400).json({ status: "FAILURE", message: error.message });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await loginUser(email, password);

    res.status(200).json({ data: result, status: "SUCCESS" });
  } catch (error) {
    res.status(400).json({ status: "FAILURE", message: error.message });
  }
};

export const logoutController = async (req, res) => {
  try {
    const {id, email } = req.user;
  } catch (error) {
    res.status(400).json({ status: "FAILURE", message: error.message });
  }
}