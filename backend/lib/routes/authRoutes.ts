import { Router } from "express";
import authController from "../controllers/authController";
import { verifyToken } from "../middlewares/tokens/verifyToken";
const router = Router();

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.get("/logout", verifyToken, authController.logoutUser);

export default router;
