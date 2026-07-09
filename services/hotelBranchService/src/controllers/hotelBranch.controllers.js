import { getAllHotelBranch } from "../services/hotelBranch.services.js";

export const getAllHotelBranchController = async (req, res) => {
    try {
        console.log("Fetching all hotel branches");
        const allHotelBranches = await getAllHotelBranch();
        console.log("Fetched hotel branches:", allHotelBranches);
        if (!allHotelBranches || allHotelBranches.length === 0) {
            return res.status(404).json({
                success: "FAILURE",
                message: "No hotel branches found",
            });
        }
                return res.status(200).json({
                    data: allHotelBranches,
                    success: "SUCCESS",
                    message: "Hotels branch fetched successfully",
                });
    } catch (error) {
        return res.status(500).json({
            success: "FAILURE",
            message: error.message,
        });
    }
    

}
/// under development
export const createHotelBranchController = async (req, res) => {
    try {
        //const { hotelId, branchName, location } = req.body;
        await createHotelBranch(req.body);
        return res.status(201).json({
            success: "SUCCESS",
            message: "Hotel branch created successfully",
        });
        
    } catch (error) {
        return res.status(500).json({
            success: "FAILURE",
            message: error.message
        })
    }
}