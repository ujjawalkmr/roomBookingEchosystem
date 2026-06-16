import bcrypt from "bcryptjs";
import User from "../models/User.js";
import Otp from "../models/Otp.js";
import generateToken from "../utils/generateToken.js";

export const createPassword =
  async (
    email,
    password
  ) => {

    const otpRecord =
      await Otp.findOne({
        email,
        verified: true
      });

    if (!otpRecord) {
      throw new Error(
        "OTP not verified"
      );
    }

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    const user =
      await User.create({
        email,
        password:
          hashedPassword
      });

    await Otp.deleteMany({
      email
    });

    return user;
  };

export const loginUser =
  async (
    email,
    password
  ) => {

    const user =
      await User.findOne({
        email
      });

    if (!user) {
      throw new Error(
        "User not found"
      );
    }

    const match =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!match) {
      throw new Error(
        "Invalid password"
      );
    }

    return {
      user,
      token:
        generateToken(
          user._id
        )
    };
  };