const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');


//---------------------------------- Google+ --------------------
passport.use(new GoogleStrategy({
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret,
  callbackURL: keys.google.callbackURL
},
  function (accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    console.log(' success Woo !!');
    console.log(profile);


  }
));