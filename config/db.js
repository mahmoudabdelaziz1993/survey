const mongoose = require("mongoose");
const keys = require('./keys');
mongoose.connect(keys.mongoURI);
module.exports = mongoose;