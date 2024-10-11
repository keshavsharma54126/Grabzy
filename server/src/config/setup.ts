import AdminJS from "adminjs";

import * as AdminJSMongoose from "@adminjs/mongoose"
import AdminJSFastify from "@adminjs/fastify"
import * as Models from "../models/index"
AdminJS.registerAdapter(AdminJSMongoose)

export const admin = new AdminJS({
  resources:[
    {
        resource:Models.Customer,
        options:{
            listProperties:["phone","role","isActivated"],
            filterProperties:["phone","role"],
        }
    },
    {
        resource:Models.Admin,
        options:{
            listProperties:["email","role","isActivated"],
            filterProperties:["email","role"],
        }
    },
    {
        resource:Models.Branch,
        
    }
  ],
  branding:{
    companyName:"Grabzy",
    withMadeWithLove:false
  } ,
  rootPath:"/admin"
})

export const buildAdminRouter = async(app: any)=>{
    await AdminJSFastify.buildAuthenticatedRouter(
        admin,
        {

        },
        app,{
            store:session
        }
    )
}