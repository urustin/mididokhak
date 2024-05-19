//authRoutes.js
const express = require('express');
const User = require('../models/User.js'); // Adjust the path as needed

const router = express.Router();
const passport = require('../configs/passportConfig'); // Adjust the path as necessary


// Define the users array here

router.post('/signup', async (req, res) => {
    try {
        // console.log(req.body);
        const existingUser = await User.findOne({ username: req.body.username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }


        let newUser = new User({
            username: req.body.username,
            // email: req.body.email,
            password: req.body.password
        });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: error.message });
    }
});

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      
      if (err) {
        console.log(err);
        return res.status(502).json({message : err.message});
      }
      if (!user) {
        return res.status(401).json({message : info.message});
      }
      req.logIn(user, (err) => {
        if (err) {
            console.log(err);
          return res.status(500).json({message : err.message});
        }
        // console.log(res);
        const token = user.generateAuthToken();
        // res.redirect(201, 'http://127.0.0.1:5500/profile.html');
        // res.send('./profile')
        // res.json({ success: true, message: 'Logged in successfully' }); // Send JSON response
        res.json({success:true,message:"login success!", token} )
        
      }); 
    })(req, res, next);
  });
  

module.exports = router;
