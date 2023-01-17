const UserData = require("../models/UserModel")

const CreateUser= async (req,res)=>{
try {
    const {name,email,phone,password} = req.body
    const user = new UserData({name,email,phone,password})
    await user.save() 
    res.status(201).json({msg:"User Create successfully"})
} catch (error) {
    res.status(401).json({error:"Create user failed"})
}
}
module.export={CreateUser}