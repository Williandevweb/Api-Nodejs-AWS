const express = require("express");
const app = express();
//const cors = require("cors");

//app.use(cors());

app.get("/", (req, res)=>{
    res.json({message:"SUCESSO!"});
});

app.get("/teste", (req, res)=>{
    res.json({message:"TESTE SUCESSO!"});
});

app.listen(3000);
