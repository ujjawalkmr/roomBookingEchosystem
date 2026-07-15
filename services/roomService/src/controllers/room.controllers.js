import { getAllRooms } from "../services/room.services.js";

export const getAllRoomsController = async (req, res) => {
  console.log("getAllRoomsController called");
  try {
    const rooms = await getAllRooms();
    return res
      .status(200)
      .json({
        data: rooms,
        success: "SUCCESS",
        message: "Rooms fetched successfully",
      });
  } catch (error) {
    console.error("Error fetching rooms:", error);
    return res.status(500).json({ message: "Internal server error",success: "FAILURE" });
  }
};
