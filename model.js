const mongoose=require('mongoose')
const Schema=mongoose.Schema
const model=new Schema({
    name:String,
    age:Number
})
module.exports=mongoose.model('users',model)