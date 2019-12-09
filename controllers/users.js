const express = require('express')
const router = express.Router()
const User = require('../models/Users')


router.get('/users', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.post('/users', async (req, res) => {
    try {
        const createdUser = await User.create(req.body)
        res.json(createdUser)
    } catch(err) {
        console.log(err)
    }
});

router.put('/users/:userId', async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true})
    res.json(updatedUser)
});

router.delete('/users/:userId', (req, res) => {
    return res.send(
        `DELETE HTTP method on user/${req.params.userId} resource`,
    );
});


module.exports = router

