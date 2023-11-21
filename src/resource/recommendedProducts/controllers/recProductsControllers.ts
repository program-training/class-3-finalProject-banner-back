import { register, loginService } from "../services/usersService";
import { handleError } from "../../../utils/handleErrors";
import { Request, Response } from "express";
import { UserInterface, UserLoginInterface } from "../interfaces/UserInterface";

export const handleGetRecProducts = async (req: Request, res: Response) => {
  try {
    const userFromBody = req.body as UserLoginInterface;
    const user = await loginService(userFromBody);
    return res.send(user);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleGetRecProductById = async (req: Request, res: Response) => {
  try {
    const user = req.body as UserInterface;
    console.log(user);

    const newUserRecord = await register(user);
    return res.status(201).send(newUserRecord);
  } catch (error) {
    if (error instanceof Error) handleError(res, error);
  }
};
export const handleGetRecProductByproductId = async (
  req: Request,
  res: Response
) => {
  try {
    const userFromBody = req.body as UserLoginInterface;
    const user = await loginService(userFromBody);
    return res.send(user);
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
