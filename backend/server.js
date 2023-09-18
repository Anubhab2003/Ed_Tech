const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.resolve(__dirname, '../frontend/build')));

app.get('/home', (req,res)=>{
    res.json({message: "hello from welcome page!"});
})

app.listen(port, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`server is up on port: ${port}`)
    }
})