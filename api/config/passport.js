const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy

const { User } = require('./../models')

const { google } = require('./../../env')

passport.use(
  new LocalStrategy(
    {
      usernameField: 'user[email]',
      passwordField: 'user[password]',
    },
    function (email, password, done) {
      User.findOne({ email })
        .then(function (user) {
          if (!user || !user.validPassword(password)) {
            return done(null, false, {
              errors: { 'email or password': 'is invalid' },
            })
          }
          return done(null, user)
        })
        .catch(done)
    },
  ),
)
passport.use(
  new GoogleStrategy(
    {
      clientID: google.clientID,
      clientSecret: google.clientSecret,
      callbackURL: '/auth/google/redirect',
    },
    (accessToken, refreshToken, profile, done) => {
      User.MODEL.findOne({ provider: { googleId: profile.id } }).then(
        (currentUser) => {
          if (currentUser) {
            done(null, currentUser)
          } else {
            new User.MODEL({
              provider: { googleId: profile.id },
            })
              .save()
              .then((newUser) => {
                done(null, newUser)
              })
          }
        },
      )
    },
  ),
)
