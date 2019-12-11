const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const postSchema = new Schema({
    address: String,
    coordinates: Number,
    homePics: String,
    info: String,
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
