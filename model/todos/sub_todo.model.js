import mongoose from 'mongoose'

const subtodo = new mongoose.schema({
  content:{
    type: String,
    required: true
  },
  complete:{
    type:Boolean,
    default: false
  },
  createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  subTodos:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubTodo"
  },
], //Array of Subtodos
},{timestamps : true});

export const subtodo = mongoose.model("subtodo" , subtodo)