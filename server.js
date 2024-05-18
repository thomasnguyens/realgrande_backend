const express = require('express')
const mongoose = require('mongoose')
const dotenv=require('dotenv')
const multer=require('multer')
const cors = require('cors');
const router = require('./routes/allRoutes')
const app = express()
const port = 4000
dotenv.config()

//Parse the JSON data
app.use(express.json())

// let corspolicy = {
//   origin: process.env.FRONTENDURI
// }
// app.use(cors(corspolicy));
app.use(cors());

const db = module.exports =async ()=>{
  try{
    await mongoose.connect(process.env.MONGODBURL, { 	
      user: process.env.DBUSERNAME, 
      pass: 	process.env.DBPASSWORD
    })
    console.log("MongoDB Connection is Successful")
  } catch(error){
    console.log(error);
    console.log("MongoDB Connection is failed")
  } 
}
db();

app.use('/api',router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})