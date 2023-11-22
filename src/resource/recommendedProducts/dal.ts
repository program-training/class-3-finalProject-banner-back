import { Types } from "mongoose";
import recProductsModel from "../../mongoDB/Schemas/UserSchema";
import { handleDBResponseError } from "../../utils/handleErrors";
import { recProductsInterface } from "./interfaces/recProductsInterfaces";

type CollectionResult = Promise<Record<string, unknown>[] | Error>;

export const createRecProducts = async (
  recProductsData: recProductsInterface
) => {
  try {
    const recProducts = new recProductsModel({
      ...recProductsData,
    });
    recProducts.isNew = true;
    await recProducts.save();
    return recProducts;
  } catch (error) {
    return handleDBResponseError(error);
  }
};

export const readRecProducts = async (): CollectionResult => {
  try {
    return recProductsModel.find({});
  } catch (error) {
    return handleDBResponseError(error);
  }
};

export const readRecProductsByRecId = async (
  id: recProductsInterface["productId"]
) => {
  try {
    const recProduct = await recProductsModel.findOne({ _id: id });
    if (!recProduct) throw new Error("recProduct Not Found!");
    return recProduct;
  } catch (error) {
    return handleDBResponseError(error);
  }
};

export const readRecProductsByProductId = async (id: Types.ObjectId) => {
  try {
    const recProduct = await recProductsModel.findOne({ recProductId: id });
    if (!recProduct) throw new Error("recProduct Not Found!");
    return recProduct;
  } catch (error) {
    return handleDBResponseError(error);
  }
};

export const deleteRecProductsById = async (
  id: recProductsInterface["productId"]
) => {
  try {
    const recProduct = await recProductsModel.deleteOne({ recProductId: id });
    if (!recProduct) throw new Error("recProduct Not Found!");
    return recProduct;
  } catch (error) {
    return handleDBResponseError(error);
  }
};
