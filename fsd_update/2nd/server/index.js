const express= require('express')
const cors=require('cors')
const students=require('./student.json')
const app=express()

app.use(cors())
app.use(express.json())

const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/abcd').then(()=>{
    console.log("connected to database");
})

app.get('/studentdetails',(req,res)=>{  
            res.json(students)      
})

app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})
