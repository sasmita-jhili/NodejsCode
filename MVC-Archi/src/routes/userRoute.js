const express =require('express')
const userCtrl = require('../controllers/userController')
const router = express.Router() 

router.route('/create').post(userCtrl.createUser)
router.route('/getall').get(userCtrl.getAllUser)
router.route('/getbyid/:id').get(userCtrl.getUserById)
router.route('/updateuser/:id').patch(userCtrl.updateUser)
router.route('/deleteuser/:id').delete(userCtrl.deleteUserByid)
router.route('/alldelete').delete(userCtrl.allDelete)

module.exports = {router}