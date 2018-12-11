var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({
   name: {
       type: String,
       unique: true,
       required: false
   },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    password: {
        type: String,
        required: false
    },
    facebookProvider: {
        type: {
            id: String,
            token: String
        },
        select: false
    },
});

UserSchema.pre('save', function (next) {
    var user = this;
    if(this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if(err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if(err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.pre('upsertFbUser', function(accessToken, refreshToken, profile, cb) {
    console.log("Xprofile => " + profile.id);
    var that = this;
    return this.findOne({
        'facebookProvider.id': profile.id
    }, function(err, user) {
        // no user was found, lets create a new one
        if (!user) {
            var newUser = new that({
                fullName: profile.displayName,
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
});

UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function(err, isMath) {
        if(err) {
            return cb(err);
        }
        cb(null, isMath);
    });
};

module.exports = mongoose.model('User', UserSchema);