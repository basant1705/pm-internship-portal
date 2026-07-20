import express from "express";

import {
  registerUser,
  loginUser,
  getProfile,
} from "../controllers/authController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// ===============================
// Authentication Routes
// ===============================

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Logged-in User Profile
router.get("/profile", protect, getProfile);

export default router;