const express = require ("express");
const app = express();
app.use(express.json());
let arr = [
    {id:1,title:"Reading Bhagvat Geeta"},
    {id:2,title : "Kompass Task"},
    {id:3,title : "SG Task"}
];

app.get("/to-do",(req,res)=>{
    if(arr.length == 0){
        res.send("No Todo currently available")
    }else{
        
            res.json(arr)
        
    }

    
})

app.get("/to-do/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const work = arr.find(todo=>todo.id === id);


    if(work){
        res.json(work)
    }else{
        res.status(404).send("Content Not Found")
    }
})

app.post("/to-dos",(req,res)=>{
    const task ={
        id: Math.floor(Math.random() * 1000000),
        title: req.body.title,


    } 
    arr.push(task);
    res.status(201).send("Successfull")

})

app.put("/to-dos/:id",(req,res)=>{
    let id = parseInt(req.params.id);
    let todoindex = arr.findIndex(todo=>todo.id ===id);
    if(todoindex!=-1){
        arr[todoindex].title = req.body.title
        res.status(200).send("Successful")
    }else{
        res.status(404).send("Not Found");
    }
})







app.listen(8000);