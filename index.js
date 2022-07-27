const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json())

app.use(cors());

app.get("/teste", (req, res)=>{
  //res.sendFile(__dirname + '/index.html')
  console.log("teste")
  res.json("deu certo")
})

app.post("/estoque", (req, res)=>{
  res.send(JSON.stringify(req.body));

  console.log(req.body)
});

app.get("/tray/callback/", (req, res)=>{
    res.send(JSON.stringify(req.query));
});

app.listen(3000,()=>{
    console.log("api run")
});
