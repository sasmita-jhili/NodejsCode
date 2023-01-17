const mongoose =require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        
    },
    email:{
        type:String,
       
    }
})

const UserData = new mongoose.model("UserData",userSchema)

module.exports =UserData