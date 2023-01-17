const express = require("express");
require("./db/conn");
const Student = require("./models/students");

const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());

//create a new students
// app.post("/students", (req, res) => {
//   const user = new Student(req.body);

//   user
//     .save()
//     .then(() => {
//       res.status(201).send(user);
//     })
//     .catch((err) => {
//       res.status(400).send(err)
//     });
// });


app.post('/students', async(req,res)=>{

    try{
        const user =  new Student(req.body)
        const createUser= await user.save()
        res.status(201).send(createUser) 
    }
    catch(e){
        res.status(400).send(e)
    }    
})

app.get('/students', async(req,res)=>{
    try {
       const studentsData= await Student.find()
       res.send(studentsData)
    } catch (error) {
        res.send(error)
    }
})
app.get('/students/:id', async(req,res)=>{
    try {
       const _id = req.params.id
       const SingleStudentData = await Student.findById(_id)

       if(!SingleStudentData){
        return res.status(404).send()
       }else{
        res.send(SingleStudentData)
       }
       
    } catch (error) {
        res.status(500).send(error)
    }
})

app.patch('/students/:id', async (req,res)=>{
    try {
        const _id = req.params.id
        const updateStudentData = await Student.findByIdAndUpdate(_id, req.body,{
            new: true
        })
        res.send(updateStudentData) 
        
    } catch (error) {
        res.status(404).send(error)
    }
})

app.delete("/students/:id", async (req,res)=>{
    try {
        const _id = req.params.id
        const deleteStudentData = await Student.findByIdAndDelete(_id) 
        if(!_id){
            return res.status(404).send()
        }
        res.send(deleteStudentData)
    } catch (error) {
        res.status(500).send(error)
    }
})


app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
