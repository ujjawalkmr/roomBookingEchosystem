import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import connectDB from "./src/config/property.db.js";

connectDB();

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`Property Service Running On Port ${PORT}`);
});