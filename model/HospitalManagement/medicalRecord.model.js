import mongoose from "mongoose";
const medicalSchema= new mongoose.Schema({},{timestamp : true});
export const Record = mongoose.Model("medical" , medicalSchema);