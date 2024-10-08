import dotenv from "dotenv"
import fastify from "fastify";
import { connectDb } from "./config/connect";

dotenv.config()
const start  = async()=>{
    const PORT = process.env.PORT||3000
    await connectDb(process.env.MONGO_URL||"")
    const app = fastify()
    app.listen({port:PORT as number,host:"0.0.0.0"},(err,addr)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("ZapGo started on port "+ PORT)
        }
    })
}
start()