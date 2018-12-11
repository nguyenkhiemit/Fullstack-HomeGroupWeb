var jwt = require('jsonwebtoken');
var config = require('../config/database');

var createToken = function(auth) {
    return jwt.sign({
            id: auth.id
        }, config.secret,
        {
            expiresIn: 60 * 120
        });
};

module.exports = {
    generateToken: function(req, res, next) {
        req.token = createToken(req.auth);
        return next();
    },
    sendToken: function(req, res) {
        return res.status(200).send({success: true, token: 'JWT ' + req.token});
    }
};