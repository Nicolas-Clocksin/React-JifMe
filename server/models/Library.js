//mongoose used to set data variables as data model
const mongoose = require('mongoose');

//Library Schema includes variables name, src, type, like, dislike
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
    like: {
        type: Boolean,
        required: false
    },
    dislike: {
        type: Boolean,
        required: false
    }
});
//model is made from the schema and exported
const LibraryModel = mongoose.model("libraries", LibrarySchema);
module.exports = LibraryModel;