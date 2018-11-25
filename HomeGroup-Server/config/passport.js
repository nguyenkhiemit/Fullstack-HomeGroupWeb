var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var FacebookStrategy = require('passport-facebook').Strategy;
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');
var config = require('../config/database');

/**
 *Configuration and Settings
 */
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        if(err) {
            console.error('There was an error accessing the records of' +
                ' user with id: ' + id);
            return console.log(err.message);
        }
        return done(null, user);
    })
});

var opts = {};
opts.secretOrKey = config.secret;
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
passport.use('jwt', new JwtStrategy(opts, function (jwt_payload, done) {
    User.find({id: jwt_payload.id}, function (err, user) {
        if(err) {
            return done(err, false);
        }
        if(user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
}));

passport.use('facebook', new FacebookStrategy({
        clientID: "299568457549895",
        clientSecret: "c013cbf4fd2fcd816da74fe0a0faf100",
        callbackURL: "https://3c0066bc.ngrok.io/authen/fblogin",
        profileFields: ['id', 'displayName', 'photos', 'email']
    },
    function (accessToken, refreshToken, profile, cb) {
        console.log('profile = ' + profile.emails[0].value);
        cb(null, profile);
    }
));

module.exports = passport;