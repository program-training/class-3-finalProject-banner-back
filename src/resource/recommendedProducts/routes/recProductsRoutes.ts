import express from "express";
import {
  // handleGetRecProducts,
  // handleGetRecProductById,
  // handleGetRecProductByproductId,
  // handlePostRecProducts,
  // handleDeleteRecProducts,
  getRecProductsByCategoryNameController,
  getAllProductsController,
} from "../controllers/recProductsControllers";

const router = express.Router();

router.post("/api/categoryName", getRecProductsByCategoryNameController);
router.get("/api/allProducts", getAllProductsController);
// router.get("/recProducts", handleGetRecProducts);
// router.get("/recProducts:recProductId", handleGetRecProductById);
// router.get("/recProducts:productId", handleGetRecProductByproductId);
// router.post("/recProducts", handlePostRecProducts);
// router.delete("/recProducts:recProductsId", handleDeleteRecProducts);

export default router;
