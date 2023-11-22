import { Types } from "mongoose";
import recProductsModel from "../../mongoDB/Schemas/UserSchema";
import { handleDBResponseError } from "../../utils/handleErrors";
import {
  CategoryNameProps,
  recProductsInterface,
} from "./interfaces/recProductsInterfaces";
import axios from "axios";

type CollectionResult = Promise<Record<string, unknown>[] | Error>;

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const getRecProductsByCategoryNameDal = async (
  categoryName: CategoryNameProps
) => {
  try {
    const categories = await recProductsModel
      .find({ category: categoryName })
      .exec();
    if (categories.length === 0) {
      return [];
    }
    const shuffledCategories = shuffleArray(categories);
    return shuffledCategories;
  } catch (error) {
    return handleDBResponseError(error);
  }
};

export const getAllProductsDal = async () => {
  try {
    const response = await axios.get(
      `${process.env.BASE_URL_ERP}api/shop_inventory/`
    );
    if (response.status < 300 && response.status >= 200) {
      const products = response.data;
      return products;
    }
  } catch (error) {
    return handleDBResponseError(error);
  }
};

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

export const readRecProductsById = async (id: Types.ObjectId) => {
  try {
    const recProduct = await recProductsModel.findOne({ _id: id });
    if (!recProduct) throw new Error("recProduct Not Found!");
    return recProduct;
  } catch (error) {
    return handleDBResponseError(error);
  }
};

export const readRecProductsByProductId = async (
  id: recProductsInterface["recProductId"]
) => {
  try {
    const recProduct = await recProductsModel.findOne({ recProductId: id });
    if (!recProduct) throw new Error("recProduct Not Found!");
    return recProduct;
  } catch (error) {
    return handleDBResponseError(error);
  }
};

export const deleteRecProductsById = async (
  id: recProductsInterface["recProductId"]
) => {
  try {
    const recProduct = await recProductsModel.deleteOne({ recProductId: id });
    if (!recProduct) throw new Error("recProduct Not Found!");
    return recProduct;
  } catch (error) {
    return handleDBResponseError(error);
  }
};
