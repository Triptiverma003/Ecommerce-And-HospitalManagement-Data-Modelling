import { Timestamp } from "bson";
import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  },
  quantity:{
    type:Number,
    required:true,
  },
});
const Ordermodel = new mongoose.Schema({
  orderPrice:{
    type:Number,
    required:true,
  },
  customer:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  orderItem:{
    type: [orderItemSchema],
  },
  address:{
    type:String,
    required: true,
  },
  Status:{
    type:String,
    enum: ["PENDING" , "CANCELLED" , "DELIVERED"],
    default:"PENDING"
  }
},{timestamps:true});
export const Order = mongoose.Model("Order" , Ordermodel);
