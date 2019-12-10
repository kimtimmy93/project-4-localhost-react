const express = require('express');
const path = require('path');
const app = express();
// const cors = require('cors');

const PORT = process.env.PORT || 8000
require('./config/db')


const User = require('./models/Users')
const Host = require('./models/Hosts')
const Post = require('./models/Posts')

const userController = require('./controllers/users')
const hostController = require('./controllers/hosts')

// app.use(cors())
app.use(express.static(path.join(__dirname, 'build')))
app.use(express.json())

app.use('/auth', userController)
app.use('/hosts', hostController)

app.get('/api/v1/hello', (req, res) => {
    res.json({ message: 'world' })
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});