import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

router.get("/getHello", handlerGetHelloController);

export default router;
