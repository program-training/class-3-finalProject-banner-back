import express from "express";
import { handlerGetHelloController } from "../controllers/helloControllers";

const router = express.Router();

router.get("/getHello", handlerGetHelloController);

export default router;
