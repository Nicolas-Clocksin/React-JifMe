const mongoose = require('mongoose');


const GifSchema = new mongoose.Schema({
    
    src: {
        type: String,
        require: true
    },
    liked: {
        type: Boolean,
        required: false,
    },
    disliked: {
        type: Boolean,
        required: false
    }
});

const GifModel = mongoose.model("gifs", GifSchema);
module.exports = GifModel;