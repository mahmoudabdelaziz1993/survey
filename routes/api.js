const express = require('express');
const Router = express.Router();
const credits = require('../middleware/credit');
const authenticated = require('../middleware/authenticated');
const { Survey } = require("../models/Survey");
const Mailer = require('../services/mail');
const template = require('../services/mail_template');
//--------------- curent user -----------
Router.get('/current_user', (req, res) => res.send(req.user));

// ----------------------- create a new survey ------------
Router.post('/survey', authenticated, credits, async (req, res) => {
    const { title, body, subject, recipients } = req.body;
    const newSurvey = new Survey({
        title,
        body,
        subject,
        recipients: recipients.split(',').map((email) => { return { email } }),
        owner: req.user._id,
        date_sent: Date.now()
    });
    console.log(newSurvey);


    const mailer = new Mailer(newSurvey, template(newSurvey));
    try {
        await mailer.send();
        await newSurvey.save();
        req.user.credits -= 1;
        const user = await req.user.save();
        res.send(user);

    } catch (error) {
        res.status(422).send(error);
    }

});

//------------------- voting --------------------
Router.get('/voting',(req,res)=>{
    res.send(" thanks for voting ");
});
module.exports = Router;