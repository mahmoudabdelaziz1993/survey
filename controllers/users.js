const mongoose =require('mongoose');
const {User} = require('../models/User');
const _ = require('lodash');

//---------------find or create ------------------------
var findOrCreate = async (profile) => {
    const user = await User.findOne({ social_id: profile.id });
    if (_.isNull(user)) {
        let user = new User({
            name: profile.displayName,
            social_id: profile.id,
            image: profile.photos[0].value || null,
            gender: profile.gender,
            email: profile.emails[0].value || null,
            provider: profile.provider
        });
        await user.save();
        return user;
    }
    return user;
};
module.exports ={findOrCreate};