import * as propertyService from "../services/property.services.js";


export const getAllProperties = async (req, res) => {
  try {
    const properties = await propertyService.getAllProperties();

    res.status(200).json({
      
      data: properties,success: "SUCCESS",
    });
  } catch (error) {
    res.status(500).json({
      success: "FAILURE",
      message: error.message,
    });
  }
};