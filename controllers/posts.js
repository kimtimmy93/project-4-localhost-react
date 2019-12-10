const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');
const User = require('../models/Users')

router.get('/posts', (req, res) => {
    return res.send('GET HTTP method on post resource');
});

router.post('/posts', async (req, res) => {
   
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


