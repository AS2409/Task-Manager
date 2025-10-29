import express from "express";
import { registerUser, loginUser, getUserProfile, updateUserProfile } from "../controllers/authController"

const router = express.Router();

//Auth Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);

export default router;