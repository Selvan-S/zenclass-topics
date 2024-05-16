import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGO_URL = process.env.MONGO_URL;

export function dbConnection() {
  const params = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(MONGO_URL, params);
    console.log("Database Connected Sucessfully");
  } catch (error) {
    console.log("MongoDB is not connected");
  }
}
