const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');
const User = require('../models/Users')

// index
router.get('/', async (req, res) => {
    try {
        const allPosts = await Post.find({});
            res.json(allPosts)
        } catch(err) {
            res.send(err);
        }
});

// show
router.get('/:id', async(req, res) => {
    try {
        const foundPost = await Post.findOne({'_id': req.params.id})
         res.json(foundPost)
    } catch(err){
        console.log(err)
    }
});

router.post('/:userId', async (req, res) => {
    try {
        const findUser = await User.findById(req.params.userId)
        const newPost = await Post.create(req.body)
        findUser.posts.push(newPost)
        await findUser.save()
        res.json(newPost)
    } catch(err){
        console.log(err)   
    }
});

router.put('/:postId', async (req, res) => {
    const updatedPost = await User.findByIdAndUpdate(req.params.postId, req.body, {new: true})
    res.json(updatedPost)
});

router.delete('/posts/:postId', (req, res) => {
    return res.send(
        `DELETE HTTP method on post/${req.params.postId} resource`,
    );
});


module.exports = router;

