import mongoose from "mongoose";
import config from "../app/config";

const connectDB = async () => {
  try {
    const connectionToDB = await mongoose.connect(`${config.database_url}`);
    console.log("server is connected to mongoDB ");
  } catch (err) {
    console.log("MongoDB connection error", err);
  }
};

export default connectDB;
