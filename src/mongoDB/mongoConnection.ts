import mongoose from "mongoose";

export default async function connectToDatabase() {
  try {
    const uri = 'mongodb+srv://developers:x9XA3MGuRfIN4jIv@cluster0.erbreex.mongodb.net/';
    if (!uri) throw new Error("uri not found");
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
