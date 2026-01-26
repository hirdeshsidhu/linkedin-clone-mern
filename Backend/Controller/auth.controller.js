import { maxHeaderSize } from "http";
import genToken from "../Config/token.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
export const  signUp = async (req,res)=>{
    try {
        let {firstName,lastName,userName,email,password} = req.body;
        let emailUser = await User.findOne({email})
        if(emailUser){
            return res.status(400).json({message:"email already exist! "})
        }
        let userNameUser = await User.findOne({userName})
        if(userNameUser){
            return res.status(400).json({message:"UserName already exist! "});
        }

        let hashedPass = await bcrypt.hash(password,10);
        const user = await User.create({
            firstName,
            lastName,
            userName,
            email,
            password:hashedPass
        })
        let token = await genToken(user._id)
        res.cookie("token",token,{ // store jwt token in browser as cookie
            httpOnly:true,
            maxAge:7*24*60*60*1000,
            sameSite:"strict",
            secure:process.env.NODE_ENVIORNMENT==="production"
        })

        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json({message:error})
    }   
}