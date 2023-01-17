const express = require("express")
const app = express()

require('./db/Connection')

const userRoute=require('./routes/UserRoute')

app.use('api/user',userRoute.router)

const port = process.env.PORT||5000

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})