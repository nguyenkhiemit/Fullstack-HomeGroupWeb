let passport = require('passport');
let JwtStrategy = require('passport-jwt').Strategy;
let ExtractJwt = require('passport-jwt').ExtractJwt;

let LocalStrategy = require('passport-local').Strategy;
let FacebookTokenStrategy = require('passport-facebook-token');
let User = require('../models/user');
let config = require('../config/database');

//client must pass Authorization = 'JWT abc'
passport.use(new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
        secretOrKey: config.secret
    }, function (jwtPayload, done) {
        return User.findOne({_id: jwtPayload.id}, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            return done(null, user);
        })
    })
);

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({ email: username }, function(err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            user.comparePassword(password, function (err, isMatch) {
                if (!isMatch || err) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
            });
            return done(null, user);
        });
    }
));

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
                let newUser = new User({
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