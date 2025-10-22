import express from "express"
import { register,login,deleteUser } from "../controller/controller.js";

const router=express.Router()


// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', register);

// @route   POST /api/auth/login
// @desc    Login user and return JWT
// @access  Public
router.post('/login', login);
router.delete("/delete/:id", deleteUser);

export default router