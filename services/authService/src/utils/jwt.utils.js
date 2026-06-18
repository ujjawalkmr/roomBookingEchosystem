import jwt from "jsonwebtoken";

const generateAccessToken = (userId,email) => {
  return jwt.sign({ id: userId ,userEmail:email}, process.env.JWT_SECRET, {
    expiresIn: "10m",
  });
};
const generateRefreshToken = (userId,email) => {
  return jwt.sign({ id: userId ,userEmail:email}, process.env.JWT_SECRET, {
    expiresIn: "5d",
  });
};

export { generateAccessToken, generateRefreshToken };
