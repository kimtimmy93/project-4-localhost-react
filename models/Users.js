const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    displayName: String,
    password: String,
    profilePic: String,
    posts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
  }]
});

const User = mongoose.model('User', userSchema);


module.exports = User;



