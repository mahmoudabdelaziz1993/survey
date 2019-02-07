const express = require('express');
const port = process.env.PORT||5000;
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const passportSteup = require('./config/passport');



const app = express();
app.use('/',indexRouter);
app.use('/auth',authRouter);



app.listen(port,()=> console.log(` app on port ${port}!`));