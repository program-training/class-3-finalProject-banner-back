import mongoose from "mongoose";

export default async function connectToDatabase() {
  try {
    const uri = process.env.MONGO_CONNECTION_URI;
    if (!uri) throw new Error("uri not found");
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
