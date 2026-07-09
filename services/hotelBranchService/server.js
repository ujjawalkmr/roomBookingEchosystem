import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import connectDB from "./src/config/hotelBranch.db.js";

connectDB();

const PORT = process.env.PORT || 5004;

app.listen(PORT, () => {
  console.log(`Hotel Branch Service Running On Port ${PORT}`);
});