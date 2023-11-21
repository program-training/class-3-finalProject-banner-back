import express from "express";
import { handlerGetHelloController } from "../controllers/helloControllers";

const routerHello = express.Router();

routerHello.get("/", handlerGetHelloController);



export default routerHello;
