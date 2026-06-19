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
    console.error("Authentication error:", error);
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Token Expired",
      });
    }

    return res.status(401).json({
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

export const verifyRefreshToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;

    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    const user = await User.findById(decoded.id);

    if (!user || user.refreshToken !== refreshToken) {
      return res.status(401).json({
        message: "Invalid refresh token",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};
