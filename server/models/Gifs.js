const mongoose = require('mongoose');


const GifSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    src: {
        type: String,
        require: true
    },

});

const GifModel = mongoose.model("gifs", GifSchema);
module.exports = GifModel;