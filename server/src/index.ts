import fastify from "fastify";

const start  = async()=>{
    const PORT = process.env.PORT||3000
    const app = fastify()
    app.listen({port:PORT as number,host:"0.0.0.0"},(err,addr)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("ZapGo started on ")
        }
    })
}
start