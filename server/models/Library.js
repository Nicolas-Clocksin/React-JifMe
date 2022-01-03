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
        required: false
    },
    dislike:{
        type: Boolean,
        required: false
    }
});

const LibraryModel = mongoose.model("libraries", LibrarySchema);
module.exports = LibraryModel;