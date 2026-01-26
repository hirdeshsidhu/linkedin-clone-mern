import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
dotenv.config()
let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
let port = process.env.PORT;
app.use("/api/auth",authRouter)

app.get("/",function(req,res){
    res.send("Hello");
})
app.listen(port,()=>{
    connectDb();
    console.log(`running on ${port}`)
})