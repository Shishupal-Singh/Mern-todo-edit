import express from "express";
import cors from "cors"
import bodyParser from "body-parser"
import routes from "./routes.js"
import dotenv from "dotenv"
dotenv.config()
const port=process.env.PORT||5000;


const app=express();

// middleware
app.use(bodyParser.json());
app.use(cors())
app.use("/task",routes)

app.listen(port,()=>{
    console.log(`server connected to port ${port}`)
})