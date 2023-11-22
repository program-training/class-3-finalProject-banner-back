import mongoose from "mongoose";

export default async function connectToDatabase() {
  try {
    const uri: any = process.env.MONGO_CONNECTION_URI;

    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
