import { uploadOnCloudinary } from "../Config/cloudinary.js";
import Post from "../Models/post.model.js";

export const createPost = async (req, res) => {
  try {
    let { description } = req.body;
    let newPost;
    if (req.file) {
      let image = await uploadOnCloudinary(req.file.path);
      newPost = Post.create({
        author:req.userId,
        description,
        image,
      });
    } else {
      newPost = await Post.create({
        author:req.userId,
        description,
      });
    }
    return res.status(201).json(newPost)
  } catch (error) {
    console.log(error);
    return res.status(500).json({message:"Create Post error"})
  }
};
