import { Request, Response } from "express";
import { getAllHoursService } from "../services/services";

export const getAllHoursController = async (req: Request, res: Response) => {
  try {
    const dateId = req.params.id;
    const hours = await getAllHoursService(dateId);
    res.send(hours);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
