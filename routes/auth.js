const express = require("express");
const router = express.Router();
const { register, login, getMe } = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");

// Register new user
router.post("/register", register);

// Login user
router.post("/login", login);

// Get logged in user profile
router.get("/me", protect, getMe);

module.exports = router;