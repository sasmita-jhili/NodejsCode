const mongoose =require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,        
    },
    email:{
        type:String,
        unique: true
    },
    phone:{
        type:Number
    },
    password:{
        type:String,
    }
})

const NewUserData = new mongoose.model("NewUserData",userSchema)

module.exports =NewUserData