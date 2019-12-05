const express = require('express');
require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/comment'

mongoose
    .connect(
        mongoURI,{useNewUrlParser: true}
    ).then(() => console.log('Success connect mongoDB'))
    .catch(err => console.log('Error cannot connect mongoDB!'));

const app = express();
const port = process.env.PORT || 4002

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use((req, res, next) => {
    console.log(`server on path ${req.ip} ${req.method} ${req.path}`);
    next();
});

app.use('/images', express.static(path.join(__dirname + '/../public/images')));

app.get(`/`, (req, res) => {
    res.json({ info : `Web Application PlaceTravel: ${port}`});
});

app.listen(port, () => {
    console.log(`server run on port ${port}`);
})