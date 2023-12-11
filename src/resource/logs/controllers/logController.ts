import { Request, Response } from "express";
import { getAllHoursService } from "../services/logService";

export const getAllHoursController = async (req: Request, res: Response) => {
  try {
    const dateIid = req.params.id;
    const hours = await getAllHoursService(dateIid);
    res.send(hours);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
