const express=require('express')
const app=express( )
const mongoose=require('mongoose')
const url="mongodb://localhost:27017/CURD-app"
const schema=require("./modules/schema")
const cors=require('cors')

app.use(cors())
app.use(express.json())
mongoose.set({strictQuery:true})
  
mongoose.connect(url,(err)=>{
    if(err){
        console.log(err)
        console.log('error') 
      }
     else{
        console.log('Connect to successfully')
     }
})
app.get('/',async(req,res)=>{
    const data11=await schema.find()
    res.json(data11)
})
app.get('/:id',async(req,res)=>{
    const data11=await schema.findById(req.params.id)
    res.json(data11)
})
app.post('/',async(req,res)=>{
    const dat= await new schema({
       name:req.body.name,
       age:req.body.age,
        email:req.body.email,
        password:req.body.password
    })
   dat.save();
    res.json(dat)
})
app.put('/:id',async(req,res)=>{
    const data11=await  schema.findByIdAndUpdate(req.params.id)
       data11.name=req.body.name
       data11.age=req.body.age
        data11.email=req.body.email
        data11.password=req.body.password
    data11.save();
    res.json(data11)
})
app.delete('/:id',async(req,res)=>{
    await schema.findByIdAndDelete(req.params.id)
    res.json('successfully')
})
app.listen(8000,()=>{
    console.log('sever start')
})