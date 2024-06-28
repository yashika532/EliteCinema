// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js"
import cookieParser from "cookie-parser";
import userRoute from "./routes/UserRoute.js"

databaseConnection();

dotenv.config({
    path:".env"
})
const app=express();

//middle ware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.send("Hello World");
    
})

//api
app.use("/api/v1/user",userRoute);


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})

