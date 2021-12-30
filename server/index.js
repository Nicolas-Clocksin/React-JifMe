
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ImageModel = require('./models/Images');
const GifModel = require('./models/Gifs');
app.use(express.json());


//mongoose.connect("mongodb+srv://nclocksin:Johnny25@cluster0.fjjvh.mongodb.net/GifMe?retryWrites=true&w=majority");

app.get("/getImages", (response, request)=>{
    ImageModel.find({}, (result,error) => {
        if(error){
            response.json(error);
        }
        else{
            response.json(result);
        }
    });
});

app.get("/getGifs", (response, request)=>{
    GifModel.find({}, (result,error) => {
        if(error){
            response.json(error);
        }
        else{
            response.json(result);
        }
    });
});
app.listen(3001, ()=>{
    console.log("Running on 3001");
});
