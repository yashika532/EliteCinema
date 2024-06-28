import express from "express";
import { Register } from "../Controllers/user.js";

const router = express.Router();

router.route("/register").post(Register);
export default router;