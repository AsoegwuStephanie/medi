// Importing libraries that we installed using npm
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require("bcrypt"); //Importing bcrypt package
const nodemailer = require('nodemailer');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Connecting to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/mediApp", {useUnifiedTopology:true});

// Connect to MongoDB
const MONGODB_URL = 'mongodb://127.0.0.1:27017/mediApp';

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


// Routes
app.use('/', require('./routes/uroute'));


// End Routes
app.listen(4000, () => {
    console.log("Server started on Port 4000");
})