const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    displayName: String,
    profilePic: String,
   _id: String,
    posts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
  }]

}, {_id: false});

const User = mongoose.model('User', userSchema);


module.exports = User;



