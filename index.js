const express = require ("express");
const app = express();
app.use(express.json());

var users = [{
  name: "John",
  kidney:[{
    healthy : false
  }]
}

]

app.get("/",function(req,res){
  const johnkidney = users[0].kidney;
  const noofkidney = johnkidney.length;
  let healthykidney = 0;
  for(i=0;i<=johnkidney.length;i++){
    if (johnkidney.healthy){
      healthykidney++;
    }
  }
  const defectivekidney = noofkidney-healthykidney;

  res.json({
    healthykidney,
    noofkidney,
    defectivekidney,
  }
    

)

})

app.post("/",function(req,res){
  const newdata = req.body.newdata;
  users[0].kidney.push({
    healthy: newdata
  });
  res.json({
    message: "Done"
  })
})

app.listen(8080);

