import connectToDatabase from "../../mongoDB/mongoConnection";
import HelloWorldModel from "../../mongoDB/Schemas/HelloWorldSchema";

export const handlerGetHelloDal = async () => {
  try {
    const result = await HelloWorldModel.find({});
    return result ? "Hello World" : "Hello World";
  } catch (err) {
    console.error(err);
    throw err;
  }
};
