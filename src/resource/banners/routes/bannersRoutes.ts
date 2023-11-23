import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

// router.get("/path", handler);
router.get("/allBanners", getAllBanners);

export default router;
