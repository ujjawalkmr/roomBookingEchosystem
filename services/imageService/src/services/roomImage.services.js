import RoomImage from "../models/roomImage.models.js";

export const getAllRoomImages = async (req, res) => {
    return await RoomImage.find();
}

export const uploadRoomImages = async (roomImageData) => {
    return await RoomImage.create(roomImageData);
};

// export const getRoomImagesByRoomId = async (roomId) => {
//     return await RoomImage.find({ roomId });
// };

// export const getRoomImageById = async (id) => {
//     return await RoomImage.findById(id);
// };

// export const deleteRoomImage = async (id) => {
//     return await RoomImage.findByIdAndDelete(id);
// };