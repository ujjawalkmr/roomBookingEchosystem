import "dotenv/config";
//dotenv.config();

import app from "./src/app.js";
import connectDB from "./src/config/roomImage.db.config.js";

connectDB();

const PORT = process.env.PORT || 5006;

app.listen(PORT, () => {
  console.log(`Image Service Running On Port ${PORT}`);
});