import recProductsModel from "../../mongoDB/Schemas/RecProductsSchema";
import { handleDBResponseError } from "../../utils/handleErrors";
import { recProductsInterface } from "./interfaces/recProductsInterfaces";
import axios from "axios";

type CollectionResult = Promise<Record<string, unknown>[] | Error>;

function shuffleAndSlice<T>(array: T[], quantity: string): T[] {
  const shuffledArray = array.slice();
  const quantityAsNumber = parseInt(quantity, 10);

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray.slice(0, quantityAsNumber);
}

export const getRecProductsByCategoryNameDal = async (
  categoryName: string,
  quantity: string
) => {
  try {
    const categories = await recProductsModel
      .find({ category: categoryName })
      .exec();
    if (categories.length === 0) {
      return [];
    }
    const shuffledCategories = shuffleAndSlice(categories, quantity);
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
      productId: recProductsData._id,
      name: recProductsData.name,
      salePrice: recProductsData.salePrice,
      quantity: recProductsData.quantity,
      description: recProductsData.description,
      category: recProductsData.category,
      discountPercentage: recProductsData.discountPercentage,
      image: {
        large: recProductsData.image.large,
        medium: recProductsData.image.medium,
        small: recProductsData.image.small,
        alt: recProductsData.image.alt,
      },
      createdAt: recProductsData.createdAt,
      author: recProductsData.author,
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
  id: recProductsInterface["_id"]
) => {
  try {
    const recProduct = await recProductsModel.findOne({ _id: id });
    if (!recProduct) throw new Error("recProduct Not Found!");
    return recProduct;
  } catch (error) {
    return handleDBResponseError(error);
  }
};

export const readRecProductsByProductId = async (id: string) => {
  try {
    const recProduct = await recProductsModel.findOne({ productId: id });
    if (!recProduct) throw new Error("recProduct Not Found!");
    return recProduct;
  } catch (error) {
    return handleDBResponseError(error);
  }
};

export const deleteRecProductsById = async (
  id: recProductsInterface["_id"]
) => {
  try {
    const recProduct = await recProductsModel.findOneAndDelete({
      _id: id,
    });
    console.log(recProduct);

    if (!recProduct) throw new Error("recProduct Not Found to be deleted !");
    return recProduct;
  } catch (error) {
    return handleDBResponseError(error);
  }
};
