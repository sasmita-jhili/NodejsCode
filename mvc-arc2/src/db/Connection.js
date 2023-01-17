const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/crud_operation1',{
    useNewUrlPaser:true
})
.then(()=>{
    console.log("Db Connection Successfull");
})
.catch(()=>{
    console.log("Db Connection Failed");
})