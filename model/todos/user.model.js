import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

username:{
  type: string,
  unique: true,
  required : true,
  lowercase:true
},

email:{
  type: string,
  unique : true,
  required: true,
  lowercase : true
},

password:{
  type: string,
  unique: true,
  required: [true, "Password is required"],
  
},

}, {timestamps: true}
)

const User = mongoose.model("user", userSchema)