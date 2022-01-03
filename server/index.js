
const express = require('express');

const mongoose = require('mongoose');
const LibraryModel = require('./models/Library');
const app = express();
const cors = require('cors');

app.use(express.json())
app.use(cors());

mongoose.connect("mongodb+srv://nclocksin:Johnny25@cluster0.u36f6.mongodb.net/JifMe?retryWrites=true&w=majority");

app.get("/getLibrary", (request, response)=>{
    LibraryModel.find({}, (result, error)=>{
        if(error){
            response.json(error);
        }
        else{
            response.json(result);
        }
    })
});

app.post("/postLibrary", async (request, response)=>{
    const library = request.body;
    const newLibrary = new LibraryModel(library);

    await newLibrary.save();

    return response.json(library);
})


app.listen(3001, ()=>{
    console.log("Running on 3001");
});
