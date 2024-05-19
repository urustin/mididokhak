// passportConfig.js

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcryptjs');
const User = require('../models/User');




// 로그인 전략 설정
passport.use(new LocalStrategy(
    async (username, password, done) => {
      try{
        const user = await User.findOne({username:username});
        if(!user){
          return done(null,false,{message: "invalid username"});
        }
        const isMatch = await user.comparePassword(password);
        console.log("isMatch="+isMatch);
        if(!isMatch){
          return done(null,false,{message:"invalid pwd"});
        }
        // console.log(user);
        return done(null,user)
      } catch (err){
        console.log(err);
        return done(err);
      }
    }
  ));

// JWT 전략 설정
passport.use(new JwtStrategy(
  {
    secretOrKey: 'jwt-secret',
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  },
  async (jwt_payload, done) => {
    try {
      const user = await User.findById(jwt_payload.id);
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
  }
));





passport.serializeUser((user, done) => {
  done(null, user.id); // Serialize user by ID
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
      done(err, user); // Error handling and deserializing user by ID
  });
});

module.exports = passport;
