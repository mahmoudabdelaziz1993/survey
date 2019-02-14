var mongoose = require('mongoose');
const _ = require('lodash');
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: { type: String },
    image: { type: String },
    social_id: String,
    provider: String,
    password: { type: String, default: null },
    email: { type: String, default: null },
    credits:{type:Number,default:0}
});

const User = mongoose.model('users', schema);

module.exports = { User };