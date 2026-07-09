import Hotels from "../models/hotel.models.js";

export const getAllHotels = async () => {
  return await Hotels.find();
};