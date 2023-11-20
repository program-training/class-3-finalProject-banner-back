import connectToDatabase from "../../mongoDB/mongoConnection";
import HelloWorldModel from "../../mongoDB/Schemas/HelloWorldSchema";

export const handlerGetHelloDal = async () => {
  try {
    await connectToDatabase();
    const result = await HelloWorldModel.find({});
    if (!result) {
      console.log("Data not found");
    } else {
      console.log("Data is found");
    }
    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
