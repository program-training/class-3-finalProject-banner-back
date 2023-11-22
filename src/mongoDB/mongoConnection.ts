import mongoose from "mongoose";

export default async function connectToDatabase() {
  try {
    const uri = `mongodb+srv://${process.env.USER_NAME_MONGODB_ATLAS}:${process.env.PASSWORD_MONGODB_ATLAS}@cluster0.erbreex.mongodb.net/?retryWrites=true&w=majority`;
    // const uri: any = process.env.MONGO_CONNECTION_URI;
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
