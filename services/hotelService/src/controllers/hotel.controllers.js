import { getAllHotels } from "../services/hotel.services.js";

export const getAllHotelsController = async (req, res) => {
    try { 
        const allHotels = await getAllHotels();
        return res.status(200).json({
            data: allHotels,
            success: "SUCCESS",
            message: "Hotels fetched successfully",
            
        });
        

    }catch (error) {
       return res.status(500).json({
            success: "FAILURE",
            message: error.message,
        });
    }
};