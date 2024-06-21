const port = 4000;
const express = require("express")
const app = express();
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const multer = require("multer")
const path =  require("path")
const cors = require("cors")

app.use(express.json())
app.use(cors())

//database connection wtih mongodb
mongoose.connect("mongodb+srv://onwukachibike:NC3TpUnyNjez0oNg@cluster0.t8msajv.mongodb.net/e-commerce")
 
//Api creation

app.get("/",(req, res)=>{
    res.send("welcome to ecommerce tutorial")
    
})

//image storage engine

const storage = multer.diskStorage({
    destination:"./upload/images",
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

//creating upload endpoint for images


app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:``
    })
})


app.listen(port,(error)=>{
    if(!error){
        console.log("server running on port " + port)
    }else{
        console.log("error : "+error)
    }
})
