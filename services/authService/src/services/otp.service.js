import Otp from "../models/otp.model.js";
import generateOtp from "../utils/generateOtp.utils.js";
import { sendOtpEmail } from "./email.service.js";

export const sendOtp = async (email) => {
  const otp = generateOtp();

  await Otp.deleteMany({
    email,
  });

  await Otp.create({
    email,
    otp,
    expiresAt: new Date(Date.now() + 5 * 60 * 1000),
  });

  await sendOtpEmail(email, otp);
};

export const verifyOtp = async (email, otp) => {
  const otpRecord = await Otp.findOne({
    email,
    otp,
  });

  if (!otpRecord) {
    return false;
  }

  if (otpRecord.expiresAt < new Date()) {
    return false;
  }

  otpRecord.verified = true;

  await otpRecord.save();

  return true;
};
