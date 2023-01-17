const express=require('express')
const router=express.Router()

const userCtrl = require('../controllers/userControllers')

router.route('/create').post(userCtrl.CreateUser)