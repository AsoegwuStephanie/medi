// Importing libraries that we installed using npm
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require("bcrypt"); //Importing bcrypt package
const nodemailer = require('nodemailer');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const flash = require('express');
const session = require('express-session');

const app = express();

// const {loginCheck} = require("./controller/dController");
// loginCheck(passport);


app.get('/register', async(req, res) =>{
  res.render("register");
})
app.get('/login', async(req, res) => {
  res.render("login");
});
app.get('/dashboard', async(req, res) => {
  res.render("dashboard");
});
// Middleware
// app.set('view engine', 'ejs');
// app.use(express.static('public'));
// app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



// mongodb+srv://asoegwustephanie:steph12345@cluster0.5hhbcj1.mongodb.net/
// Connect to MongoDB
const MONGODB_URL = 'mongodb://127.0.0.1:27017/mediApp';

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


// Routes
app.use('/', require('./routes/uroute'));

// For my session to walk
// app.use(session({
//   secret: "secret",
//   saveUninitialized: false,
//   resave: false
// }));

// Initializes Passport for incoming requests, allowing authentication strategies to be applied.
// app.use(passport.initialize());
// Middleware that will restore login state from a session.
// app.use(passport.session());

// End Routes
app.listen(8000, () => {
    console.log("Server started on Port 8000"); 
})