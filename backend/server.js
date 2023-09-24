const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.resolve(__dirname, '../frontend/build')));

app.get('/', (req,res)=>{
    res.json({title: "hello from welcome page!"});
})
app.get('/user/getStarted', async(req,res)=>{
    res.json({title: 'get started page'});
})

// Serve the index.html file for all non-static requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`server is up on port: ${port}`)
    }
})