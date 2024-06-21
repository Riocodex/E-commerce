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
 
//
