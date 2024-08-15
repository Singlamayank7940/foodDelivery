import express from "express"
import cors from "cors"
import 'dotenv/config'

import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

//app config
const app=express()
const port = process.env.port || 4000;

//middleware
app.use(express.json())
//we can access any backkend from frontend
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

//request the data from the server
app.get("/",(req,res) => {
    res.send("API WORKING")
})

app.listen(port,() => {
    console.log(`http://localhost:${port}`)
})