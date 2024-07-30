import mongoose from "mongoose"
const doctorSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  qualification:{
    type:String,
    required:true,
  },
  salary : {
    type:Number,
    required:true,
  },
  workedWith:[{
    type:mongoose.Schema.Type.ObjectId,
    ref:('hospital'),
  },
],
},{timestamps: true});
export const doctor = mongoose.model("doctor", doctorSchema);