const express = require('express');
const app = express();
const {PORT} = require('./config');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(port, ()=> {
    console.log(`App listening on port ${port}`)
})
