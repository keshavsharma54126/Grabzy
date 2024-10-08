import mongoose from "mongoose"
import { DeliveryPartner } from "./user"

const BranchSchema = new mongoose.Schema({
    name:{type:String},
    Location:{
        latitude:{type:Number},
        longitute:{type:Number},
    },
    address:{type:String},
    DeliveryPartner:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"DevliveryPartner"
        }
    ]
})

export const Branch = mongoose.model("Branch",BranchSchema)