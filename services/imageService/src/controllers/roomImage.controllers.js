import {
  getAllRoomImages,
  uploadRoomImages,
  updateRoomImages,
} from "../services/roomImage.services.js";

export const getRoomImagesController = async (req, res) => {
  try {
    const roomImages = await getAllRoomImages();
    res.status(200).json({
      data: roomImages,
      success: "SUCCESS",
      message: "Room images fetched successfully",
    });
  } catch (error) {
    res.status(500).json({ success: "FAILURE", message: error.message });
  }
};

export const uploadRoomImageController = async (req, res) => {
  try {
    const { roomId } = req.body;

    const images = req.files.map((file) => ({
      imageUrl: file.path,
      publicId: file.filename,
      isPrimary: false,
    }));

    const roomImage = await uploadRoomImages({
      roomId,
      images,
    });

    res.status(201).json({
      success: "SUCCESS",
      data: roomImage,
      message: "Room images uploaded successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: "FAILURE",
      message: error.message,
    });
  }
};

export const updateRoomImagesController = async (req, res) => {
  try {
    const { roomId } = req.params;

    const newImages = req.files.map((file) => ({
      imageUrl: file.path,
      publicId: file.filename,
      isPrimary: false,
    }));
    const roomImages = await updateRoomImages(roomId, newImages);
    if (!roomImages) {
      return res.status(404).json({
        success: false,
        message: "Room not found.",
      });
    }
   

    return res.status(200).json({
      success: true,
      message: "Images added successfully.",
      data: roomImages,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
