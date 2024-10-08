import mongoose from "mongoose";

export const connectDb = async(url:string)=>{
    try{
        await mongoose.connect(url)
        console.log("Datbase connected")
    }catch(err){
        console.log("there is an error while connecting to database",err)
    }
}
