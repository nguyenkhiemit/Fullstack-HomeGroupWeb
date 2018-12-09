var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var FacebookTokenStrategy = require('passport-facebook-token');

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

passport.use(new FacebookTokenStrategy({
        clientID: "480321862375505",
        clientSecret: "967289d0d7b3d6fc1018c5b5c6a57249",
        profileFields: ['id', 'displayName', 'photos', 'email']
    },
    function (accessToken, refreshToken, profile, cb) {
        User.findOne({
            'facebookProvider.id': profile.id
        }, function (err, user) {
            if (!user) {
                var newUser = new User({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    facebookProvider: {
                        id: profile.id,
                        token: accessToken
                    }
                });
                newUser.save(function(error, savedUser) {
                    if (error) {
                        console.log(error);
                    }
                    return cb(error, savedUser);
                });
            } else {
                return cb(err, user);
            }
        });
    })
);

module.exports = passport;