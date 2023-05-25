const express = require('express')
const app = express()
const cors = require("cors");
const port =process.env.PORT || 3000;

const chef = require("./chef.json");

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World! hh')
})

app.get('/chef',(req,res)=>{
    res.send(chef)
})

app.get('/chef/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    console.log(id);

    const singleChef = chef.find(n=>n.id==id)
    console.log(singleChef);
    res.send(singleChef)
    
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})