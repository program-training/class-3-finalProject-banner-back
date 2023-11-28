import express from "express";
import {
  createBannerController,
  deleteBannerController,
  editBannerController,
  getAllBannersController,
  getAllCategoriesController,
  getBannerByIdController,
  getBannerByTitleController,
  getBannersByCategoryNameController,
} from "../controllers/bannersControllers";

const router = express.Router();

router.get("/allBanners", getAllBannersController);
router.get("/bannerById/:bannerId", getBannerByIdController);
router.get("/bannerByTitle/:bannerTitle", getBannerByTitleController);
router.get("/allCategories", getAllCategoriesController);
router.get("/banners", getBannersByCategoryNameController);
router.post("/banner", createBannerController);
router.delete("/banner/:bannerId", deleteBannerController);
router.put("/banner/:bannerId", editBannerController);

export default router;
