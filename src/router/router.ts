import express, { Request, Response } from "express";
import usersRoutes from "../resource/users/routes/usersRoutes";
import authenticateToken from "../utils/authenticate";
import recommendedProductsRoutes from "../resource/recommendedProducts/routes/recProductsRoutes";
import { handlerGetHelloController } from "../resource/helloWorld/controllers/helloControllers";
const router = express.Router();

router.use(authenticateToken);
router.use("/api/users", usersRoutes);
router.use("/api/hello", handlerGetHelloController);
router.use("/api/recommended", recommendedProductsRoutes);

router.use("*", (req: Request, res: Response) =>
  res.status(404).send("Path Not Found!")
);

export default router;
