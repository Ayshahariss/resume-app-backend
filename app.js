const express =require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const  userRoute = require("./controllers/userRoute")


const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://aysha-haris:Captainthor432@cluster0.3vwom3n.mongodb.net/vlogDb?retryWrites=true&w=majority",
{useNewUrlParser:true})


app.use("/api/users",userRoute)

app.listen(3001,()=>{
    console.log("server running")
})