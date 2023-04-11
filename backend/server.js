//modules
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import cors from 'cors'
import cookieParser from "cookie-parser";

//routes
import roomRoute from './Routes/RoomRouter.js'
import authRoute from './Routes/AuthRouter.js'

//app config 
const app = express() 
const port = process.env.PORT || 8000
dotenv.config()


// middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json()) ;



// database connection
mongoose.set('strictQuery', false)

const connect   = async () => {
    try{
        await mongoose.connect(process.env.MONGOURL);
    }
    catch(err){
throw(err);
    }
}

mongoose.connection.on('disconnected' , () => {
    console.log('mongoose disconneted')
})
mongoose.connection.on('connected' , () => {
    console.log('mongoose conneted')
})

// route configuration
app.use("/auth", authRoute);
app.use("/room", roomRoute);

//handling error
app.use((err ,req,res,next) => {
    const errStatus = err.status || 500 ;
    const errMessage = err.message || "Something unexpectedly happen" ;
    
    res.status(errStatus).json({
        success : false ,
        status : errStatus ,
        message : errMessage ,
        stack : err.stack
    })
})




//listen
app.listen(port , () => {
    connect();
    console.log(`listening  http://127.0.0.1:${port}`);
})

// Export the Express API
export default app;