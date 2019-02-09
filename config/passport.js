const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const controller = require('../controllers/users');
const {User} = require('../models/User');
const {mongoose} =require('./db');
//------------------------------------------------ serialize and deserialze cookie -------------------
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
      done(err, user);
  });
});


//---------------------------------- Google+ --------------------
passport.use(new GoogleStrategy({
  clientID: keys.google_clientID,
  clientSecret: keys.google_clientSecret,
  callbackURL: keys.google_callbackURL
},
  function (accessToken, refreshToken, profile, done) {
    
    console.log(' success Woo !!');
    controller.findOrCreate(profile).then((user)=>done(null,user));
    

  }
));