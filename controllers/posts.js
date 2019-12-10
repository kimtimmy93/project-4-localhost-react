const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');
const User = require('../models/Users')

router.get('/', (req, res) => {
    try {
        const allPosts = await Post.find({});
            res.json(allPosts)
        } catch(err) {
            res.send(err);
        }
});

router.post('/posts', async (req, res) => {
   const newPost = await User.findById(req.params.postId, req.body, {new: true})
   res.json(newPost)
});

router.put('/posts/:postId', async (req, res) => {
    const updatedPost = await User.findByIdAndUpdate(req.params.postId, req.body, {new: true})
    res.json(updatedPost)
});

router.delete('/posts/:postId', (req, res) => {
    return res.send(
        `DELETE HTTP method on post/${req.params.postId} resource`,
    );
});


module.exports = router


