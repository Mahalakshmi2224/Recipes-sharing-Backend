const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const User=require('./Models/User')
const bcrypt=require('bcryptjs')



const app=express()
const PORT=3005
app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(
    ()=>console.log("DB connected successfully..")
).catch(
    (err)=>console.log(err)
)

app.listen(PORT,(err)=>{
    if(err)
    {
        console.log(err)
    }
    console.log("Server is running on port :"+PORT)
})
