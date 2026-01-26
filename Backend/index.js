import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
dotenv.config()
let app = express();
let port = process.env.PORT;
app.use("/api/auth",authRouter)
app.get("/",function(req,res){
    res.send("Hello");
})
app.listen(port,()=>{
    connectDb();
    console.log(`running on ${port}`)
})