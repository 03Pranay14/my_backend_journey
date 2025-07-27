const express = require("express");
const app = express();
const fs = require("fs");

app.get("/files",(req,res)=>{
    fs.readdir("./files/",(err,files)=>{
        if(err){
            return res.status(500).send("Error! file not found")
        }else{
            res.json(files)
        }
    })

})

app.get("/files/:filename",(req,res)=>{
    let filename = req.params.filename
    fs.readFile(`./files/${filename}`,(err,files)=>{
        if(err){
            return res.status(404).send("Content Not Found");
        
        }else{
            res.send(files)
        }
    })


})

app.use((req,res)=>{
    res.status(404).send("Internal Server Error")
})


app.listen("8080")