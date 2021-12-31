const mongoose = require('mongoose');


const DisLikesSchema = new mongoose.Schema({
    
    src: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    }

});

const DisLikeModel = mongoose.model("dislikes", DisLikesSchema);
module.exports = DisLikeModel;