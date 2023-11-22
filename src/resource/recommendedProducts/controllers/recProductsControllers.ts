import { register, loginService } from "../services/usersService";
import { handleError } from "../../../utils/handleErrors";
import { Request, Response } from "express";
import { UserInterface, UserLoginInterface } from "../interfaces/UserInterface";
import { Types } from "mongoose";
import {
  getProductByRecIDService,
  getRecProductByProductIDService,
  getRecProductsService,
} from "../../users/services/usersService";

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
    const userFromBody = req.body as UserLoginInterface;
    const user = await loginService(userFromBody);
    return res.send(user);
  } catch (error) {
    handleError(res, error);
  }
};
export const handleDeleteRecProducts = async (req: Request, res: Response) => {
  try {
    const userFromBody = req.body as UserLoginInterface;
    const user = await loginService(userFromBody);
    return res.send(user);
  } catch (error) {
    handleError(res, error);
  }
};

/////////////////////////////////////////////////////////

export const handleGetProductById = async (req: Request, res: Response) => {
  try {
    const id = new Types.ObjectId(req.params.id);
    const productById = await getProductByIDService(id);
    return res.send(productById);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleCreateProduct = async (req: Request, res: Response) => {
  try {
    const productToAdd = req.body as ProductInterface;
    const productRecord = await createProductService(productToAdd);
    return res.send(productRecord);
  } catch (error) {
    handleError(res, error);
  }
};
