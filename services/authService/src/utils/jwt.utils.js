import jwt from "jsonwebtoken";

const generateAccessToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};
const generateRefreshToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "5d",
  });
};

export { generateAccessToken, generateRefreshToken };
