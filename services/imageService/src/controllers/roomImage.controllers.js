import { getAllRoomImages,uploadRoomImages} from "../services/roomImage.services.js";

export const getRoomImagesController = async (req, res) => {
    try {
        const roomImages = await getAllRoomImages();
        res.status(200).json({data:roomImages,success: "SUCCESS", message: "Room images fetched successfully"});
    } catch (error) {
        res.status(500).json({success:"FAILURE", message: error.message });
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
