import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    branchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "HotelBranch",
      required: true,
    },

    roomNumber: {
      type: String,
      required: true,
      trim: true,
    },

    roomType: {
      type: String,
      required: true,
      enum: ["Single", "Double", "Deluxe", "Suite", "Family"],
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    capacity: {
      type: Number,
      required: true,
      min: 1,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    floor: {
      type: Number,
      default: 1,
    },

    bedType: {
      type: String,
      enum: ["Single", "Double", "Queen", "King"],
      default: "Queen",
    },

    totalBeds: {
      type: Number,
      default: 1,
    },

    amenities: [
      {
        type: String,
      },
    ],

    // roomImages: [
    //   {
    //     type: String,
    //   },
    // ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Room = mongoose.model("Room", roomSchema);

export default Room;