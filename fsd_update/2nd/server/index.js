const express=require('express')
const cors=require('cors')
const app=express();
app.use(express.json())

app.get('/studentdetails',(req,res)=>{
   
        if(students){
            res.json(students)
        }else{
            res.json({"error":"No students found"})
        }
    
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
