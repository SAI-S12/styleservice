import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import bodyparser from "body-parser"
import router from "./router/Routerr.js"


dotenv.config();
const app=express();
app.use(cors())
app.use(bodyparser.json())
app.use(express.json())
const port=process.env.PORT || 5000


mongoose.connect(process.env.MONGOURI)
.then(()=>{
    console.log("DATABSE CONNECTED ");
})
.catch(()=>{
    console.log("DATABASE NOT CONNECTED ");   
})

app.get('/', (req, res) => {
  res.send('🚀 Backend is running!');
});

app.use("/api",router)


app.listen(port,()=>{
    console.log("connected on port:5000"); 
})
