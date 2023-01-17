import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.set("strictQuery", false);
const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_LOCAL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected successfully");
  } catch (error) {
    console.log("connection to mongodb failed", error.message);
  }
};
export default connection;
