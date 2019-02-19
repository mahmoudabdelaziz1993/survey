module.exports = {
    google_clientID:process.env.GOOGLE_CLIENT_ID ,
    google_clientSecret:process.env.GOOGLE_CLIENT_SECRET ,
    google_callbackURL: process.env.GOOGLE_CALLBACK_URI,
    mongoURI:process.env.MONGO_URI ,
    session_secret:process.env.SESSION_SECRET,
    stripe_publishable_key:process.env.STRIPE_PUBLISHABLE,
    stripe_secret_key:process.env.STRIPE_SECRET,
    sendGried_key :process.env.SENDGRID_KEY,
    redirect_domain :process.env.REDIRECT_DOMAIN


};