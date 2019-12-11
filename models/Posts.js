const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const postSchema = new Schema({
    address: String,
    coordinates: Number,
    homePics: String,
    info: String,
    _id: String
}, {_id: false});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
