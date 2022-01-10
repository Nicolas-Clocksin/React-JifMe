
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
    const dislike = request.body.dislike;
    const id = request.body.id;

    try{
        await LibraryModel.findById(id, (error, result)=>{
            result.like = Boolean(like);
            result.dislike = Boolean(dislike);
            result.save();
        });
    }catch(err){
        console.log(err);
    }
    
});
//updates the current dislike value stored at specific ID in the database
app.put("/dislike", async( request, response)=>{
    const dislike = request.body.dislike;
    const like = request.body.like;
    const id = request.body.id;

    try{
        await LibraryModel.findById(id, (error, result)=>{
            result.dislike = Boolean(dislike);
            result.like = Boolean(like);
            result.save();
        });
    }catch(err){
        console.log(err);
    }
   
});
app.put("/UpdateEntry", async(request, response)=>{
    const name = request.body.name;
    const src = request.body.src;
    const id = request.body.id;

    try{
        await LibraryModel.findById(id, (error, result)=>{
            result.name= String(name);
            result.src = String(src);
            result.save();
        });
    }catch(error){
        console.log(error);
    }
});
app.delete("/RemoveEntry/:id", async(request, response)=>{
    const id = request.params.id;
    await LibraryModel.findByIdAndRemove(id).exec();
    res.send("Removed from Library");
})
//the application is set to run on localhost:3001
app.listen(3001, ()=>{
    console.log("Running on 3001");
});
