const express = require('express');
const Router = express.Router();
const credits = require('../middleware/credit');
const mongoose = require('mongoose');
const authenticated = require('../middleware/authenticated');
const { Survey } = require("../models/Survey");
const Mailer = require('../services/mail');
const template = require('../services/mail_template');
const _ = require('lodash');
const Path = require('path-parser').default;
const { URL } = require('url');
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
// ----------------- list all survay of a user-------
Router.get('/survey',authenticated, async (req,res)=>{
    const survey = await Survey.find({owner:req.user.id}).select({recipients:false});
    res.send(survey);
});
//------------------- voting --------------------
Router.get('/voting/:surveyID/:choice', (req, res) => {
    res.send(" thanks for voting ");
});

//---------------------- handling email click  events from sendgrid --------- 
Router.post('/survey/webhooks', (req, res) => {
    console.log(req.body);
    const parse = new Path('/api/voting/:surveyID/:choice');
    const events = _
        .chain(req.body)
        .map(({ email, url }) => {
            const match = parse.test(new URL(url).pathname);
            if (match) {
                return { email, SurveyId: match.surveyID, choice: match.choice };
            }
        })
        .compact()
        .uniqBy('email', 'SurveyId')
        .each(({email,SurveyId,choice}) => {
            Survey.updateOne(
                {
                    _id: SurveyId,
                    recipients: {
                        $elemMatch: { email: email, responded: false }
                    }
                },
                {
                    $inc: { [choice]: 1 },
                    $set: { "recipients.$.responded": true },
                    last_respond:new Date()
                }).exec();
        })
        .value();
    console.log("events", events);
    res.send({});
})
module.exports = Router;