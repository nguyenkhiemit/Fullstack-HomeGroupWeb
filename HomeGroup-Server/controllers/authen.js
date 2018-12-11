var express = require('express');
var User = require('../models/user');
var config = require('../config/database');
var passport = require('passport');
var { generateToken, sendToken } = require('../utils/token.utils');
var jwt = require('jsonwebtoken');
var router = express.Router();

/* POST sign up */
router.post('/signup', function (req, res) {
    if (!req.body.email || !req.body.password) {
        res.json({success: false, msg: 'Please pass name and password'});
    } else {
        var newUser = new User({
            email: req.body.email,
            password: req.body.password
        });
        newUser.save(function (err) {
            if (err) {
                res.json({success: false, msg: 'Username already exits'});
            } else {
                res.json({success: true, msg: 'Successful created user!'});
            }
        });
    }
});

/* POST login in */
router.post('/login', passport.authenticate('local', {session: false}), function(req, res, next) {
    if (!req.user) {
        return res.send({success: false, msg: req.message});
    }
    console.log('user id = ' + req.user.id);
    req.auth = {
        id: req.user.id
    };
    next();
}, generateToken, sendToken);

/* GET user info */
router.get('/profile', passport.authenticate('jwt', {session: false}), function (req, res) {
    if (!req.user) {
        return res.send({success: false, msg: req.message});
    }
    return res.send({success: true, data: req.user});
});

/* Login Facebook */
router.post('/auth/facebook', passport.authenticate('facebook-token', {session: false}), function(req, res, next) {
        if (!req.user) {
            return res.send(401, 'User Not Authenticated');
        }
        console.log('user id = ' + req.user.id);
        req.auth = {
            id: req.user.id
        };
        next();
    }, generateToken, sendToken);

module.exports = router;