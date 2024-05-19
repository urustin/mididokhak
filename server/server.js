// server.js
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const path = require('path');
const passport = require('./configs/passportConfig'); // Adjust the path as necessary
require('./configs/database');
const authRoutes = require('./routes/authRoutes'); // Import the routes


const mongoose = require('mongoose');


//port number
const port = 5010;
//app start
const app = express();


// cors
app.use(cors());
// 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


// routings

app.get('/quest', (req, res) => {
    let body = {a:"CCCC",b:"ABBA",c:"AVB"};
   
    res.send(body);
});

app.use('/auth', authRoutes); 

//return
app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname,"..", '/profile.html'));
});




// start!
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});