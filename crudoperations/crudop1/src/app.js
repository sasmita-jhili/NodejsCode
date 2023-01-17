const express = require('express')
const UserModel =require('./models/usermodel')
require('./db/dbconnection')
const app = express()
const port = 5000

app.use(express.json())

app.get('/',
    (req, res) => {
        res.send('welcome to express server')
    })
app.post('/user',(req,res)=>{
    UserModel.create(req.body,)
})
app.listen(port, () => {
    console.log(`server is running on ${port}`);
})