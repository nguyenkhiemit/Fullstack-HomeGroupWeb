var express = require('express');
var router = express.Router();
var Comment = require('../models/Comment');

router.get('/', function (req, res) {
    Comment.find().exec(function (err, comments) {
        if(err) {
            if(err) throw err;
            return res.json({success: false, message: 'Comment do not exits'});
        } else {
            if(comments) {
                Comment.count().exec(function (err, count) {
                    return res.json({success: true, total: count, data: comments});
                });
            } else {
                return res.json({success: false, message: 'Comment do not exits'});
            }
        }
    })
});

router.post('/post', function (req, res) {
    console.log(req.body);
    let comment = new Comment({
        name: req.body.name,
        email: req.body.email,
        content: req.body.content
    });
    comment.save(function (err) {
        if(err) {
            if(err) throw err;
            return res.json({success: false, message: 'comment failure'});
        } else {
            return res.json({
                success: true,
                "message" : "success",
                "data" : comment
            });
        }
    });
});

module.exports = router;