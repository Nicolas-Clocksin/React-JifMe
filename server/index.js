
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
app.get("/getLibrary", (request, response) => {
    LibraryModel.find({}, (result, error) => {
        if (error) {
            response.json(error);
        }
        else {
            response.json(result);
        }
    })
});
//creates a new library object to be inserted into the database
app.post("/postLibrary", async (request, response) => {
    const library = request.body;
    const newLibrary = new LibraryModel(library);
    await newLibrary.save();

});

//updates the like value currently stored at a specific ID in the database
app.put("/UpdateStatus", async (request, response) => {
    const like = request.body.like;
    const dislike = request.body.dislike;
    const id = request.body.id;

    try {
        //await and store the current update value in the database 
        await LibraryModel.findById(id, (error, result) => {
            result.like = Boolean(like);
            result.dislike = Boolean(dislike);
            result.save();
        }).clone();
    } catch (err) {
        console.log(err);
    }

});
//updates the current dislike value stored at specific ID in the database

app.put("/UpdateEntry", async (request, response) => {
    const name = request.body.name;
    const src = request.body.src;
    const id = request.body.id;

    try {
        //wait to receive data and once it is update the entry and refresh the current page
        await LibraryModel.findById(id, (error, result) => {
            result.name = String(name);
            result.src = String(src);
            result.save();
            response.send("/ViewLibrary");
        }).clone();
    } catch (error) {
        console.log(error);
    }
});
//given an ID, the library entry is found then removed from the database
app.delete("/RemoveEntry/:id", async (request, response) => {
    const id = request.params.id;
    await LibraryModel.findByIdAndRemove(id).exec().then(() => { response.send("/ViewLibrary") });

})
//the application is set to run on localhost:3001
app.listen(3001, () => {
    console.log("Running on 3001");
});
