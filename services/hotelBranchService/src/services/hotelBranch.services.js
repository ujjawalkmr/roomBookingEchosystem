import HotelBranch from "../models/hotelBranch.models.js";

export const getAllHotelBranch = async () => {
  return await HotelBranch.find();
};

export const createHotelBranch = async (hotelBranchData) => {
 HotelBranch.create({

    hotelId:"6870f123456789abcdef1234",

    branchName:"Taj Mumbai",

    city:"Mumbai",

    state:"Maharashtra",

    country:"India"

});  return await newHotelBranch.save();
}