const mongoose = require('mongoose');


const LikesSchema = new mongoose.Schema({
    
    src: {
        type: String,
        require: true
    },

});

const LikeModel = mongoose.model("likes", LikesSchema);
module.exports = LikeModel;