
//constant libraries are called and set to be usedd throughout the application
const express = require('express');

const mongoose = require('mongoose');
const LibraryModel = require('./models/Library');
const app = express();
const cors = require('cors');

//use the express and json libraries in app
app.use(express.json())
app.use(cors());

//creates database connection to MongoDB
mongoose.connect("mongodb+srv://nclocksin:Johnny25@cluster0.u36f6.mongodb.net/JifMe?retryWrites=true&w=majority");


//get data values from the library and return the results
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
//creates a new library object to be inserted into the database
app.post("/postLibrary", async (request, response)=>{
    const library = request.body;
    const newLibrary = new LibraryModel(library);

    await newLibrary.save();
   
    return response.json(library);
});

//updates the like value currently stored at a specific ID in the database
app.put("/like", async(request, response) =>{
    const like = request.body.like;
    const id = request.body.id;

    try{
        await LibraryModel.findById(id, (error, result)=>{
            result.like = like;
            result.save();
        });
    }catch(err){
        console.log(err);
    }
    response.send("Like");
});
//updates the current dislike value stored at specific ID in the database
app.put("/dislike", async( request, response)=>{
    const dislike = request.body.dislike;
    const id =  request.body.id;

    try{
        await LibraryModel.findById(id, (error, result)=>{
            result.dislike = dislike;
            result.save();
        });
    }catch(err){
        console.log(err);
    }
    response.send("Dislike");
});
//the application is set to run on localhost:3001
app.listen(3001, ()=>{
    console.log("Running on 3001");
});
