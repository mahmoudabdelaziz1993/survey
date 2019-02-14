const express  = require('express');
const router = express.Router();
const keys = require('../config/keys');
const stripe  = require('stripe')(keys.stripe_secret_key);
const authenticated = require('../middleware/authenticated');
router.post('/stripe',authenticated,async(req,res)=>{
    const charge = await stripe.charges.create({
        amount: 500,
        currency: "usd",
        source: req.body.id, // obtained with Stripe.js
        description: "$5 for 5 email credits"
      });
     // console.log(charge);
     req.user.credits +=5;
     await req.user.save();
      
});

module.exports= router;