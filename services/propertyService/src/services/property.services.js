import Property from "../models/property.models.js";

export const getAllProperties = async () => {
  return await Property.find();
};

export const getPropertyById = async (id) => {
  return await Property.findById(id);
};