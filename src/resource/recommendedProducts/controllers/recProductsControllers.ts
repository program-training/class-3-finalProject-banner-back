import { handleError } from "../../../utils/handleErrors";
import { Request, Response } from "express";
import { Types } from "mongoose";
import {
  deleteRecProductByRecIDService,
  getProductByRecIDService,
  getRecProductByProductIDService,
  getRecProductsService,
  postRecProductService,
} from "../services/recProductsService";
import { recProductsInterface } from "../interfaces/recProductsInterfaces";
import { getRecProductsByCategoryNameService } from "../services/recProductsServices";
import { getAllProductsService } from "../services/recProductsServices";

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
    const id = new Types.ObjectId(req.params.id);
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
    const id = new Types.ObjectId(req.body.productId);
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
    const id = new Types.ObjectId(req.params.id);
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
    const { categoryName, quantity } = req.body;
    const result = await getRecProductsByCategoryNameService(
      categoryName,
      quantity
    );
    return res.send(result);
  } catch (error) {
    handleError(res, error);
  }
};
