import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    roomId: {
      type: String,
      required: [true, "Room ID is required"],
      unique: true,
      trim: true,
      uppercase: true,
    },

    propertyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property",
      required: [true, "Property ID is required"],
    },

    title: {
      type: String,
      required: [true, "Room title is required"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters"],
      maxlength: [100, "Title cannot exceed 100 characters"],
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [10, "Description must be at least 10 characters"],
      maxlength: [1000, "Description cannot exceed 1000 characters"],
    },

    roomNumber: {
      type: String,
      required: [true, "Room number is required"],
      trim: true,
    },

    roomType: {
      type: String,
      required: true,
      enum: {
        values: [
          "Standard",
          "Deluxe",
          "Suite",
          "Executive",
          "Family",
          "Presidential",
        ],
        message: "Invalid room type",
      },
    },

    capacity: {
      adults: {
        type: Number,
        required: true,
        min: [1, "Adults must be at least 1"],
      },

      children: {
        type: Number,
        default: 0,
        min: [0, "Children cannot be negative"],
      },
    },

    totalRooms: {
      type: Number,
      required: true,
      min: [1, "Total rooms must be at least 1"],
    },

    availableRooms: {
      type: Number,
      required: true,
      min: [0, "Available rooms cannot be negative"],
    },

    pricePerNight: {
      type: Number,
      required: true,
      min: [1, "Price must be greater than 0"],
    },

    discountPercentage: {
      type: Number,
      default: 0,
      min: [0, "Discount cannot be negative"],
      max: [100, "Discount cannot exceed 100"],
    },

    currency: {
      type: String,
      default: "INR",
      enum: ["INR", "USD", "EUR", "GBP"],
    },

    status: {
      type: String,
      enum: [
        "AVAILABLE",
        "BOOKED",
        "MAINTENANCE",
        "OUT_OF_SERVICE",
      ],
      default: "AVAILABLE",
    },

    amenities: [
      {
        type: String,
        trim: true,
      },
    ],

    images: [
      {
        type: String,
        trim: true,
      },
    ],

    averageRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    totalReviews: {
      type: Number,
      default: 0,
      min: 0,
    },

    checkInTime: {
      type: String,
      default: "14:00",
    },

    checkOutTime: {
      type: String,
      default: "11:00",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Property", roomSchema);