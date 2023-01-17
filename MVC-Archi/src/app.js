const express =require('express')
const app= express()

const userRoute = require('./routes/userRoute')

require('./db/Connection')

app.use(express.json());     //to accept json data

app.use(express.urlencoded({extended:true}))

app.use('/api/users',userRoute.router)


const port = process.env.PORT || 8000
app.listen(port, ()=>{
    console.log(`Server is Running on ${port}`);
})