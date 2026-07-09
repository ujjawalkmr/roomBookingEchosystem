import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    hotelName: {
      type: String,
      required: true,
      trim: true,
    },

    hotelDescription: {
      type: String,
      default: "",
      trim: true,
    },

    hotelLogo: {
      type: String,
      default: "",
    },

    hotelWebsite: {
      type: String,
      default: "",
    },

    hotelEmail: {
      type: String,
      default: "",
      lowercase: true,
      trim: true,
    },

    hotelPhone: {
      type: String,
      default: "",
      trim: true,
        },
        headOfficeAddress: {
        type: String,
        default: "",
        trim: true,
        },
        headOfficeCountry: {
            type: String,
            default: "India",
            trim: true,
            required: true,
        },
        headOfficeCity: {
            type: String,
            default: "Mumbai",
            trim: true,
            required: true,
        },
        totalBranches: {
            type: String,
            default: "1",
            trim: true,
        },
        branchInCountry: {
            type: Array,
            default: [],
        },
        branchCityInCountry: {
            type: Object,
            default: {},
        }
  },
  {
    timestamps: true, // Automatically adds createdAt & updatedAt
    versionKey: false,
  }
);

export default mongoose.model("Hotel", hotelSchema);