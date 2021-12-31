
const express = require('express');

const mongoose = require('mongoose');
const ImageModel = require('./models/Images');
const GifModel = require('./models/Gifs');
const LikesModel = require('./models/Likes');
const DisLikeModel = require('./models/Dislikes');

const app = express();
const cors = require('cors');

app.use(express.json())
app.use(cors());

mongoose.connect("mongodb+srv://nclocksin:Johnny25@cluster0.u36f6.mongodb.net/JifMe?retryWrites=true&w=majority");

app.get("/getImage", (request, response)=>{
    ImageModel.find({}, (result,error) => {
        if(error){
            response.json(error);
        }
        else{
            response.json(result);
        }
    });
});
app.post("/postImage", async (request, response)=>{
        const image = request.body;

        const newImage = new ImageModel(image);
        await newImage.save();
        return response.json(image);
})
app.get("/getGifs", (request, response)=>{
    GifModel.find({}, (result,error) => {
        if(error){
            response.json(error);
        }
        else{
            response.json(result);
        }
    });
});
app.post("/postGif", async (request, response) =>{
    const gif = request.body;
    const newGif = new GifModel(gif)

    await newGif.save();
    return response.json(gif);
});
app.post("/liked", async (request, response) =>{
    const liked = request.body;
    const newLiked = new LikesModel(liked);

    await newLiked.save();
    return response.json(liked);
});
app.post("/disliked", async (request, response) =>{
    const disliked = request.body;
    const newLiked = new DisLikeModel(disliked);

    await newLiked.save();
    return response.json(disliked);
});
app.listen(3001, ()=>{
    console.log("Running on 3001");
});
