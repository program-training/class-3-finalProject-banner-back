import { getAllHoursController } from "../controllers/logController";
import express from "express";

const router = express.Router();

router.get("/allHours/:id", getAllHoursController);

export default router;
