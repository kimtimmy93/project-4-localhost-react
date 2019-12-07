const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const hostSchema = new Schema({
    username: String,
    email: String,
    password: String,
    profilePic: String,
    reviews: [String],
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
});



const Host = mongoose.model('Host', hostSchema);


module.exports = Host;
