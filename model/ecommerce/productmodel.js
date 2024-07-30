import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  description:{
    name: required,
    type:String,
  },
  name:{
    name:required,
    type:String,
  },
  productImage:{
    type:Number,
    default:0,
  },
  price:{
    type:Number,
    default:0,
  },
  stock:{
    default:0,
    type:Number,
  },
  category:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref :"User",
  },
},{timestamps:true});
export const Product = mongoose.model("Productmodel" , productSchema);