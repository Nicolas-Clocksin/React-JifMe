const mongoose = require('mongoose');


const GifSchema = new mongoose.Schema({
    
    src: {
        type: String,
        require: true
    },
    
});

const GifModel = mongoose.model("gifs", GifSchema);
module.exports = GifModel;