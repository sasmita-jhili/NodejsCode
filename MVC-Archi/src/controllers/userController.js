const NewUserData = require("../models/userModel")

const createUser = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body
        const user = await new NewUserData({ name, email, phone, password })
        await user.save()
        res.status(201).json({ msg: "create user successfully" })
    } catch (error) {
        res.status(401).send({ error: "cretae user Failed" })
    }
}
const getAllUser = async (req, res) => {
    try {
        const user = await NewUserData.find()
        res.status(201).json({user})
    } catch (error) {
        res.status(401).json({error:"user data not found"})
    }


    // const user = await NewUserData.find()
    // try {
    // const allUser = user.map((val) => {
    //     const { name, email, phone } = val
    //     return { name, email, phone }
    // })
    // res.status(201).json({ allUser })
    // } catch (error) {
    //     res.status(401).json({error:"user data not found"})
    // }
}

const getUserById = async(req,res)=>{
    try {
        const _id = req.params.id
        const getuser= await NewUserData.findById(_id)
        res.status(201).json({getuser})
    } catch (error) {
        res.status(401).json({error:"invalid user id"})
    }
}

const updateUser = async(req,res)=>{
    try {
        const _id = req.params.id
        const updateUserById = await NewUserData.findByIdAndUpdate(_id,req.body,
            {new:true}) 
            await updateUserById.save()
            res.send(updateUserById)
    } catch (error) {
        res.status(401).send(error)
    }
}
const deleteUserByid = async(req,res)=>{
    try {
        const _id = req.params.id
        const result =await NewUserData.findByIdAndDelete(_id)
        console.log(result);
        res.status(200).json({msg:"Successfully Delete"})
    } catch (error) {
        res.status(401).json({err:"Invalid Crdentials"})
    }
}
const allDelete= async(req,res)=>{
    try {
        
        const result =await NewUserData.deleteMany()
        console.log(result);
        res.status(200).json({msg:"Successfully Delete"})
    } catch (error) {
        res.status(401).json({err:"Invalid Crdentials"})
    }
}

module.exports = { createUser, getAllUser, getUserById,updateUser,deleteUserByid,allDelete }   