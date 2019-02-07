const express = require('express');
const router = express.Router();
const passport = require('passport');


//------------------------------ Google+ --------------------
router.get('/google',passport.authenticate('google', { scope: ['profile'] }));
router.get('/google/callback',passport.authenticate('google'));
module.exports = router;