const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const controller = require('../controllers/users');


//---------------------------------- Google+ --------------------
passport.use(new GoogleStrategy({
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret,
  callbackURL: keys.google.callbackURL
},
  function (accessToken, refreshToken, profile, cb) {
    
    console.log(' success Woo !!');
    controller.findOrCreate(profile).then((err,user)=>cb(err,user));
    

  }
));