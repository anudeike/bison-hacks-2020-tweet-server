require('dotenv').config()
const express = require("express")
const app = express()
const cors = require("cors")
fs = require('fs');

// use cors
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 6060;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/all-tweets', (req, res) => {
    // get the file information
    let raw = fs.readFileSync('tweets.json')

    let output = JSON.parse(raw)

    res.status(202).json(output[0]);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})