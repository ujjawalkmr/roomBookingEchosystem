import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendOtpEmail = async (email, otp) => {
  try {
    await transporter.verify();
   

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Email Verification OTP",
      text: `Your OTP is ${otp}. It will expire in 5 minutes.`,
    });

  } catch (err) {

    throw new Error(
      `Failed to send OTP email: ${err.message}`
    );
  }
};