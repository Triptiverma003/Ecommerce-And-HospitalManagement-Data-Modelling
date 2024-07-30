import mongoose from "mongoose"
const hospitalSchema = new mongoose.Schema({
  address:{
    type:String,
    required:true,
  },
    pincode:{
      type:Number,
      required:true
    },
    specializedIn:[
      {
        type:String,
      },
    ],
} , {timestamps:true});
export const hospitalModel = mongoose.Model("hospitalModel" , hospitalSchema)