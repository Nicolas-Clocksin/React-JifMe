const mongoose= require('mongoose');


const LibrarySchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    src: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    like:{
        type: Boolean,
        required: true
    },
    dislike:{
        type: Boolean,
        required: true
    }
});

const LibraryModel = mongoose.model("library", LibrarySchema);
module.exports = LibraryModel;