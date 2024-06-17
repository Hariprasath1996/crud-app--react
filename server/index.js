// import express package 
const express = require ("express")
const Users = require("./sample.json")

// create server express
const app = express();
const port =8000;


// Display all users
app.get("/Users",(req,res)=>{
    return res.json(Users);
})

app.listen(port,((err)=>{
    console.log(`App is running in port ${port}`);
}))