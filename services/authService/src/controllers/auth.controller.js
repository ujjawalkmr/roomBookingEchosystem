import User from "../models/User.js";

import {
  sendOtp,
  verifyOtp
} from "../services/otp.service.js";

import {
  createPassword,
  loginUser
} from "../services/auth.service.js";

export const sendOtpController =
  async (req, res) => {

    try {

      const { email } =
        req.body;

      const exists =
        await User.findOne({
          email
        });

      if (exists) {
        return res
          .status(400)
          .json({
            message:
              "User already exists"
          });
      }

      await sendOtp(email);

      res.json({
        message:
          "OTP sent successfully"
      });

    } catch (error) {

      res.status(500)
        .json({
          message:
            error.message
        });
    }
  };

export const verifyOtpController =
  async (req, res) => {

    const {
      email,
      otp
    } = req.body;

    const valid =
      await verifyOtp(
        email,
        otp
      );

    if (!valid) {
      return res
        .status(400)
        .json({
          message:
            "Invalid OTP"
        });
    }

    res.json({
      message:
        "OTP Verified"
    });
  };

export const createPasswordController =
  async (req, res) => {

    try {

      const {
        email,
        password,
        confirmPassword
      } = req.body;

      if (
        password !==
        confirmPassword
      ) {
        return res
          .status(400)
          .json({
            message:
              "Passwords do not match"
          });
      }

      await createPassword(
        email,
        password
      );

      res.status(201)
        .json({
          message:
            "Account Created"
        });

    } catch (error) {

      res.status(400)
        .json({
          message:
            error.message
        });
    }
  };

export const loginController =
  async (req, res) => {

    try {

      const {
        email,
        password
      } = req.body;

      const result =
        await loginUser(
          email,
          password
        );

      res.json(result);

    } catch (error) {

      res.status(400)
        .json({
          message:
            error.message
        });
    }
  };