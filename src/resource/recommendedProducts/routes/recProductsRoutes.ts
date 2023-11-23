import express from "express";
import {
  handleGetRecProducts,
  handleGetRecProductById,
  handleGetRecProductByproductId,
  handlePostRecProducts,
  handleDeleteRecProducts,
  getRecProductsByCategoryNameController,
  getAllProductsController,
} from "../controllers/recProductsControllers";

const router = express.Router();

router.get("/categoryName", getRecProductsByCategoryNameController);
router.get("/allProducts", getAllProductsController);
router.get("/recProducts", handleGetRecProducts);
router.get("/recProductsById/:recProductId", handleGetRecProductById);
router.get(
  "/recProductsByProductId/:productId",
  handleGetRecProductByproductId
);
router.post("/recProduct", handlePostRecProducts);
router.delete("/recProduct/:recProductsId", handleDeleteRecProducts);

export default router;
