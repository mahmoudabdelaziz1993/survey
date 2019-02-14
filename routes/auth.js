const express = require('express');
const router = express.Router();
const passport = require('passport');
const authenticated = require('../middleware/authenticated');



//------------------------------ Google+ --------------------
router.get('/google',passport.authenticate('google', { scope: ['profile','email'] }));
router.get('/google/callback',passport.authenticate('google'
, { failureRedirect: '/' }),
function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('/home');
});
//-------------------------- logout --------------------
router.get('/logout',authenticated, function(req, res) {
  req.logout();
 res.redirect('/');
});
module.exports = router;