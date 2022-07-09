const express = require("express");
const app = express();
//const cors = require("cors");

//app.use(cors());

app.get("/", (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get("/tray/callback", (req, res)=>{
    res.json({message:"SUCESSO!"});
});

app.listen(3000,()=>{
    console.log("api run")
});
