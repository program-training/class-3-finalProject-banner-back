import { Request, Response } from "express";
import { handlerGetHelloService } from "../services/helloService";

export const handlerGetHelloController = async (req: Request, res: Response) => {
  try {
    const result = await handlerGetHelloService();
    return res.send(result);
  } catch (err) {
    console.error(err);
    throw err;
  }
};
