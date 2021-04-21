import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()


const connection_url=process.env.CONNECTION_URL

const mongo_conn=mongoose.connect(connection_url,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
useFindAndModify:true})
.then((console.log("databse connectd",mongoose.connection.readyState)))
.catch(()=>console.log("databse not connected"))

export default mongo_conn;