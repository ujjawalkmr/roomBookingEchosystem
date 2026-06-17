import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
  {
    email: String,

    otp: String,

    verified: {
      type: Boolean,
      default: false
    },

    expiresAt: Date
  },
  {
    timestamps: true
  }
);

export default mongoose.model(
  "Otp",
  otpSchema
);