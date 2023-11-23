import express from "express";
import { getAllBannersController } from "../controllers/bannersControllers";

const router = express.Router();

// router.get("/path", handler);
router.get("/allBanners", getAllBannersController);

export default router;
