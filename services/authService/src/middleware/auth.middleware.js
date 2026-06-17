import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid Token",
    });
  }
};

export const validateJson = (req, res, next) => {
  if (!req.is("application/json")) {
    return res.status(400).json({
      status: "FAILURE",
      message: "Content-Type must be application/json",
    });
  }

  next();
};
