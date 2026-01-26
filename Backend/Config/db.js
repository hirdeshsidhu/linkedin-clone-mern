import mongoose  from "mongoose";
const connectDb = async ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo Db connected successfully!");
    } catch (error) {
        console.log("Error -> ",error);
    }
}
export default connectDb;