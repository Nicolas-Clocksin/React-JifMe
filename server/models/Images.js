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
    liked: {
        type: Boolean,
        required: false,
    },
    disliked: {
        type: Boolean,
        required: false
    }

});

const ImageModel = mongoose.model("images", ImagesSchema);
module.exports = ImageModel;