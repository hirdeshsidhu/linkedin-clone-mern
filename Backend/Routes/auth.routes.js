import express from "express";
import { signUp } from "../Controller/auth.controller.js";

let authRouter = express.Router();

authRouter.post("/signup",signUp)
export default authRouter;