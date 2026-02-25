import { uploadOnCloudinary } from "../Config/cloudinary.js";
import Post from "../Models/post.model.js";

export const createPost = async (req, res) => {
  try {
    let { description } = req.body;
    let newPost;
    if (req.file) {
      let image = await uploadOnCloudinary(req.file.path);
      newPost = await Post.create({
        author: req.userId,
        description,
        image,
      });
    } else {
      newPost = await Post.create({
        author: req.userId,
        description,
      });
    }
    return res.status(201).json(newPost);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Create Post error" });
  }
};

export const getPost = async (req, res) => {
  try {
    let posts = await Post.find()
      .populate("author", "firstName lastName profileImage headline")
      .sort({ createdAt: -1 });
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ message: "get posts error" });
  }
};

// export const toggleLike = async (req,res)=>{
//     try {
//         const {postId} = req.params;
//         const userId = req.user.id;
//         const post = await Post.findById(postId);

//         if(!post){
//             return res.status(400).json({message:"Post not found"});
//         }

//     } catch (error) {
        
//     }
// }