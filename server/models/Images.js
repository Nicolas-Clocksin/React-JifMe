const mongoose = require('mongoose');


const ImagesSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    src: {
        type: String,
        require: true
    },

});

const ImageModel = mongoose.model("images", ImagesSchema);
module.exports = ImageModel;