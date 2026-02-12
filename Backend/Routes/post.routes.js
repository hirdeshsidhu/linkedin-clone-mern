import express from "express";
import { uploadOnCloudinary } from "../Config/cloudinary.js";
import { createPost } from "../Controller/post.controller.js";
import isAuth from "../Middlewares/isAuth.js";
import upload from "../Middlewares/multer.js";
const postRouter = express.Router()

postRouter.post("/create",isAuth,upload.single("img"),createPost)

export default postRouter