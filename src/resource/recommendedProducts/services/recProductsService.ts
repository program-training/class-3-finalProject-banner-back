import chalk from "chalk";
import {
  createRecProducts,
  deleteRecProductsById,
  readRecProducts,
  readRecProductsByProductId,
  readRecProductsByRecId,
} from "../../recommendedProducts/dal";
import { recProductsInterface } from "../../recommendedProducts/interfaces/recProductsInterfaces";
import { getRecProductsByCategoryNameDal } from "../dal";
import { getAllProductsDal } from "../dal";

export const getRecProductsService = async () => {
  try {
    const RecProductsFromDAL = await readRecProducts();
    if (!RecProductsFromDAL) throw new Error("No RecProducts in the database");
    return RecProductsFromDAL;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};

export const getProductByRecIDService = async (recProductId: string) => {
  try {
    const RecProductsFromDAL = await readRecProductsByRecId(recProductId);
    return RecProductsFromDAL;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};

export const getRecProductByProductIDService = async (productId: string) => {
  try {
    const RecProductsFromDAL = await readRecProductsByProductId(productId);
    return RecProductsFromDAL;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};

export const deleteRecProductByRecIDService = async (recProductId: string) => {
  try {
    const RecProductsFromDAL = await deleteRecProductsById(recProductId);
    return RecProductsFromDAL;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};
export const postRecProductService = async (
  recProductsData: recProductsInterface
) => {
  try {
    const RecProductsFromDAL = await createRecProducts(recProductsData);
    return RecProductsFromDAL;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};

export const getRecProductsByCategoryNameService = async (
  categoryName: string,
  quantity: string
) => {
  try {
    const result = await getRecProductsByCategoryNameDal(
      categoryName,
      quantity
    );
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAllProductsService = async () => {
  try {
    const result = await getAllProductsDal();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
