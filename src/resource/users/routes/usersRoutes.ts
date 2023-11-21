import express from "express";
import {
  handleUserLogin,
  handleUserRegistration,
} from "../controllers/usersControllers";

const router = express.Router();

router.post("/login", handleUserLogin);
router.post("/register", handleUserRegistration);

export default router;
