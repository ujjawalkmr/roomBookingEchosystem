import * as propertyService from "../services/property.services.js";

export const getAllProperties = async (req, res) => {
  try {
    const properties = await propertyService.getAllProperties();

    res.status(200).json({
      data: properties,
      success: "SUCCESS",
    });
  } catch (error) {
    res.status(500).json({
      success: "FAILURE",
      message: error.message,
    });
  }
};

export const getPropertyById = async (req, res) => {
  try {
    const { id } = req.params;
    const property = await propertyService.getPropertyById(id);
    res.status(200).json({
      data: property,
      success: "SUCCESS",
    });
  } catch (error) {
    res.status(500).json({
      success: "FAILURE",
    });
  }
};