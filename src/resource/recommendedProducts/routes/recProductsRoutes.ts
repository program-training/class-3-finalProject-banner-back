import express from "express";
import {
  handleGetRecProducts,
  handleGetRecProductById,
  handleGetRecProductByproductId,
  handlePostRecProducts,
  handleDeleteRecProducts,
} from "../controllers/recProductsControllers";

const router = express.Router();

router.get("/recProducts", handleGetRecProducts);
router.get("/recProducts:recProductId", handleGetRecProductById);
router.get("/recProducts:productId", handleGetRecProductByproductId);
router.post("/recProducts", handlePostRecProducts);
router.delete("/recProducts:recProductsId", handleDeleteRecProducts);

export default router;
