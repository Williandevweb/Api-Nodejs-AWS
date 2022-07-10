const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json())

app.use(cors());

app.get("/", (req, res)=>{
    res.send(JSON.stringify(req.params));
});

app.get("/", (req, res)=>{
  res.sendFile(__dirname + '/index.html')
})

app.listen(3000,()=>{
    console.log("api run")
});
