const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req,res)=>{
    res.send("welcome to the page !!");
})

app.listen(port, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`server is up on port: ${port}`)
    }
})