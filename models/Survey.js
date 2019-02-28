var mongoose = require('mongoose');
const {Schema}= mongoose;
const {recipientSchema} = require('./Recipient')
const surveySchema = new Schema({
    title:String,
    body:String,
    subject:String,
    owner:{type:Schema.Types.ObjectId , ref :"User"},
    yes:{type:Number,default:0},
    no:{type:Number,default:0},
    recipients:[recipientSchema],
    date_sent:Date,
    last_respond:{type:Date,default:null}
});
const Survey = mongoose.model('surveys',surveySchema);
module.exports = {Survey};