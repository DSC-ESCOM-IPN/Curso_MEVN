const passport = require('passport');
const User = require('../models/User');
const config = require('../config');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
    new GoogleStrategy({
      clientID: config.google.clientID,
      clientSecret: config.google.clientSecret,
      callbackURL: '/auth/google/redirect',
    }, (accessToken, refreshToken, profile, done) => {
      User.findOne({googleId: profile.id}).then((currentUser)=>{
        if (currentUser) {
          done(null, currentUser);
        } else {
          new User({
            googleId: profile.id,
            name: profile.displayName,
          }).save().then((newUser) =>{
            done(null, newUser);
          });
        }
      });
    }),
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
