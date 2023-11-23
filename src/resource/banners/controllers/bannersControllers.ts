import { Request, Response } from "express";
import { getAllBannersService } from "../services/bannersService";

export const getAllBannersController = async (req: Request, res: Response) => {
  try {
    const banners = await getAllBannersService();
    return res.send(banners);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
