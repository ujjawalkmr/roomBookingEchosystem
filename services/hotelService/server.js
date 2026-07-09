import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import connectDB from "./src/config/hotels.db.js";

connectDB();

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log(`Hotel Service Running On Port ${PORT}`);
});