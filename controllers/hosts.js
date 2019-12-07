const express = require('express')
const router = express.Router()
const Host = require('../models/Hosts')

router.get('/hosts', (req, res) => {
    return res.send('GET HTTP method on host resource');
});

router.post('/hosts', async (req, res) => {
    try {
        const createdHost = await Host.create(req.body)
        res.json(createdHost)
    } catch(err) {
        console.log(err)
    }
});

router.put('/hosts/:hostId', async (req, res) => {
    const updatedHost = await Host.findByIdAndUpdate(req.params.hostId, req.body, {new: true})
    res.json(updatedHost)
});

router.delete('/hosts/:hostId', (req, res) => {
    return res.send(
        `DELETE HTTP method on host/${req.params.hostId} resource`,
    );
});


module.exports = router

