import express from "express";
import { getAllHoursController } from "../controllers/controllers";

const router = express.Router();

router.get("/allHours/:id", getAllHoursController);

export default router;
