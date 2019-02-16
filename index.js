const express = require('express');
const port = process.env.PORT || 5000;
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const apiRouter = require('./routes/api');
const billingRouter = require('./routes/billing');
const passportSteup = require('./config/passport');
const { mongoose } = require('./config/db');
const passport = require('passport');
var session = require('express-session');
const keys = require('./config/keys');
const bodyParser = require('body-parser');



const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.static('public'));
var SessionMiddleware = session({
    secret: keys.session_secret,
    resave: false,
    saveUninitialized: true,
    // store: new MongoStore({
    //     mongooseConnection: mongoose.connection
    // })
});
app.use(SessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', apiRouter);
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/billing', billingRouter);
if (process.env.NODE_ENV === "production"){
    // express will serve production assets
    app.use(express.static('front/build'));
    // if it doesn't recognize the route 
    const path = require('path');
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'front','build','index.html'));
    });
}




app.listen(port, () => console.log(` app on port ${port}!`));