import { handleError } from "../../../utils/handleErrors";
import { Request, Response } from "express";
import {
  deleteRecProductByRecIDService,
  getAllProductsService,
  getProductByRecIDService,
  getRecProductByProductIDService,
  getRecProductsByCategoryNameService,
  getRecProductsService,
  postRecProductService,
} from "../services/recProductsService";
import { recProductsInterface } from "../interfaces/recProductsInterfaces";

export const handleGetRecProducts = async (req: Request, res: Response) => {
  try {
    const RecProducts = await getRecProductsService();
    return res.send(RecProducts);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleGetRecProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.recProductId;
    const recProductById = await getProductByRecIDService(id);
    return res.send(recProductById);
  } catch (error) {
    handleError(res, error);
  }
};
export const handleGetRecProductByproductId = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.params.productId;
    const recProductByProductId = await getRecProductByProductIDService(id);
    return res.send(recProductByProductId);
  } catch (error) {
    handleError(res, error);
  }
};
export const handlePostRecProducts = async (req: Request, res: Response) => {
  try {
    const RecProductsFromBody = req.body as recProductsInterface;
    const RecProduct = await postRecProductService(RecProductsFromBody);
    return res.send(RecProduct);
  } catch (error) {
    handleError(res, error);
  }
};
export const handleDeleteRecProducts = async (req: Request, res: Response) => {
  try {
    const id = req.params.recProductsId;
    const RecProduct = await deleteRecProductByRecIDService(id);
    return res.send(RecProduct);
  } catch (error) {
    handleError(res, error);
  }
};

export const getAllProductsController = async (req: Request, res: Response) => {
  try {
    const result = await getAllProductsService();
    return res.send(result);
  } catch (error) {
    handleError(res, error);
  }
};

export const getRecProductsByCategoryNameController = async (
  req: Request,
  res: Response
) => {
  try {
    const { categoryName, quantity } = req.params;
    const result = await getRecProductsByCategoryNameService(
      categoryName,
      quantity
    );
    return res.send(result);
  } catch (error) {
    handleError(res, error);
  }
};
