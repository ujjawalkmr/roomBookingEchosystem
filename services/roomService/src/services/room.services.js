import Room from "../models/room.models.js";

export const getAllRooms = async () => { 
    return await Room.find();
}