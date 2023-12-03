import express, { Request, Response } from "express";
import usersRoutes from "../resource/users/routes/usersRoutes";
import authenticateToken from "../utils/authenticate";
import recommendedProductsRoutes from "../resource/recommendedProducts/routes/recProductsRoutes";
import bannersRoutes from "../resource/banners/routes/bannersRoutes";
const router = express.Router();

router.use(authenticateToken);
router.use("/users", usersRoutes);
router.use("/recommended", recommendedProductsRoutes);
router.use("/banners", bannersRoutes);

router.use("*", (req: Request, res: Response) =>
  res.status(404).send("Path Not Found!")
);

export default router;
