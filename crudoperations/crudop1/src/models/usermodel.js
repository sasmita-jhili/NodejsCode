const mongoose = require('mongoose')

const Schema = mongoose.Schema

var userschema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String, required: true
    },
    sports: {type:String}

})

const UserModel= new mongoose.model("UserModel",userschema)
module.exports= UserModel