
const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());


mongoose.connect("");

app.getImages("/getImages", (response, request)=>{

});

app.getGifs("/getGifs", (response, request)=>{

});
app.listen(3001, ()=>{
    console.log("Running on 3001");
});
