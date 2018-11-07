var express = require('express');
var path = require('path');
var router = express.Router();
var multer = require('multer');
var FileUpload = require('../models/fileupload');
var util = require('util');
const store = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.' + file.originalname);
    }
});

// filter file from req
const fileFilter = function (req, file, cb) {
    const ext = path.extname(file.originalname);
    if(ext === '.jpeg' || ext === '.png' || ext === '.jpg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

// client must use name file same
var upload = multer({storage: store, limits: {fileSize: 2000 * 2000 * 5}, fileFilter: fileFilter}).single('file');
var maxCountFile = 10;
var uploads = multer({storage: store}).array('file', maxCountFile);
var coolUploads = multer({storage: store}).fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 4}]);

// upload single file
router.post('/upload', upload, function (req, res) {
    console.log(req.body.projectName);
    upload(req, res, function (err) {
        if(err) {
            return res.status(501).json({error: err});
        }
        var fileUpload = new FileUpload(req.file.originalname, req.file.path);
        return res.json({
            "message" : "success",
            "data" : fileUpload
        });
    });
});

// upload multi files
router.post('/uploads', function (req, res, next) {
    uploads(req, res, function (err) {
        if(err) {
            console.log(err);
            return res.status(501).json({error: err});
        }
        var arrayFile = [];
        console.log('Xlength = ' + req.files.length);
        for(var i = 0; i < req.files.length; i++) {
            arrayFile.push(new FileUpload(req.files[i].originalname, req.files[i].path))
        }

        return res.json({
            "message" : "success",
            "data": arrayFile
        });
    })
});

// upload multi name files
router.post('/cool-uploads', function (req, res, next) {
    coolUploads(req, res, function (err) {
        if(err) {
            return res.status(501).json({error: err});
        }

        return res.json({
            "message" : "success"
        });
    })
});

module.exports = router;