import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import Otp from "../models/otp.model.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/jwt.utils.js";

export const createPassword = async (email, password, name) => {
  const otpRecord = await Otp.findOne({
    email,
    verified: true,
  });

  if (!otpRecord) {
    throw new Error("OTP not verified");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  await Otp.deleteMany({
    email,
  });

  return user;
};

export const loginUser = async (email, password) => {
  const user = await User.findOne({
    email,
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw new Error("Invalid credentials");
  }

  const accessToken = generateAccessToken(user._id, email);

  const refreshToken = generateRefreshToken(user._id, email);
  //const presentRefreshToken= User.findOne({refreshToken:refreshToken});
  user.refreshToken = refreshToken;
  await user.save();

  return {
    user,
    accessToken,
  };
};

export const logoutService = async (userId) => {
  const user = await User.findOne({
    _id: userId,
  });
  if (!user) {
    throw new Error("User not found");
  }
  if (!user.refreshToken) {
    throw new Error("User already logged out"); // already logged out
  }

  await User.findByIdAndUpdate(userId, {
    refreshToken: null,
  });
  return true;
};

// const {
//   user,
//   accessToken,
//   refreshToken
// } = await loginUser(
//   email,
//   password
// );

// res.cookie(
//   "refreshToken",
//   refreshToken,
//   {
//     httpOnly: true,
//     secure: true,
//     maxAge: 7 * 24 * 60 * 60 * 1000
//   }
// );

// res.status(200).json({
//   message: "Login successful",
//   accessToken,
//   user
// });
