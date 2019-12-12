const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    area: String,
    lat: Number,
    long: Number,
    homePics: String,
    info: String,
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
