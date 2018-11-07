var express = require('express');
var path = require('path');
var router = express.Router();
var Product = require('../models/Product');
var multer = require('multer');
var FileUpload = require('../models/FileUpload');

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
var upload = multer({storage: store, limits: {fileSize: 1024 * 1024 * 5}, fileFilter: fileFilter}).single('file');
var maxCountFile = 10;
var uploads = multer({storage: store}).array('file', maxCountFile);

// upload single file
router.post('/upload', function (req, res) {
    upload(req, res, function (err) {
        if(err) {
            return res.status(501).json({error: err});
        }
        let product = new Product({
            projectName: req.body.projectName,
            category: req.body.category,
            investor: req.body.investor,
            address: req.body.address,
            area: req.body.area,
            time: req.body.time,
            isMain: req.body.isMain
        });
        var arrayImage = [];
        var fileUpload = new FileUpload(req.file.originalname, req.file.path);
        arrayImage.push(fileUpload);
        product.images = arrayImage;
        product.save(function (err) {
            if(err) {
                if(err) throw err;
                return res.json({success: false, message: 'Create product failure'});
            } else {
                return res.json({
                    success: true,
                    "message" : "success",
                    "data" : product
                });
            }
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
        let product = new Product({
            projectName: req.body.projectName,
            category: req.body.category,
            investor: req.body.investor,
            address: req.body.address,
            area: req.body.area,
            time: req.body.time,
            isMain: req.body.isMain
        });
        var arrayFile = [];
        for(var i = 0; i < req.files.length; i++) {
            arrayFile.push(new FileUpload(req.files[i].originalname, req.files[i].path))
        }
        product.images = arrayFile;
        product.save(function (err) {
            if(err) {
                if(err) throw err;
                return res.json({success: false, message: 'Create product failure'});
            } else {
                return res.json({
                    success: true,
                    "message" : "success",
                    "data" : product
                });
            }
        });
    })
});

router.get('/', function (req, res) {
    var page = parseInt(req.query.page);
    var page_size = parseInt(req.query.pageSize);
    var skip = (page - 1) * page_size;
    var category = parseInt(req.query.category);
    if(category === -1) {
        Product.find({isMain: true}).skip(skip).limit(page_size).exec(function (err, products) {
            if(err) {
                if(err) throw err;
                return res.json({success: false, message: 'Product do not exits'});
            } else {
                if(products) {
                    Product.count().exec(function (err, count) {
                        return res.json({success: true, total: count, data: products});
                    });
                } else {
                    return res.json({success: false, message: 'Product do not exits'});
                }
            }
        })
    } else {
        Product.find({category : category}).skip(skip).limit(page_size).exec(function (err, products) {
            if(err) {
                if(err) throw err;
                return res.json({success: false, message: 'Product do not exits'});
            } else {
                if(products) {
                    Product.count().exec(function (err, count) {
                        return res.json({success: true, total: count, data: products});
                    });
                } else {
                    return res.json({success: false, message: 'Product do not exits'});
                }
            }
        })
    }
});

router.post('/create', function (req, res) {
    var product = new Product({
        projectName: req.body.projectName,
        investor: req.body.investor,
        address: req.body.address,
        area: req.body.area,
        time: req.body.time
    });
    product.save(function (err) {
        if(err) {
            if(err) throw err;
            return res.json({success: false, message: 'Create product failure'});
        } else {
            return res.json({success: true, message: 'create api create product success'});
        }
    });
});

router.delete('/delete', function (req, res) {
    var id = req.query.id;
    Product.findOne({_id : id}, function (err, product) {
        if (err) {
            if(err) throw err;
            return res.json({success: false, message: 'Product do not exits'});
        } else {
            if(product != null) {
                Product.findByIdAndRemove(id, function(err) {
                    if (err)
                        res.send(err);
                    else
                        res.json({success: true, message: 'Product Deleted!'});
                });
            } else {
                return res.json({success: false, message: 'Product do not exits'});
            }
        }
    });
});

router.put('/update', function (req, res) {
    var id = req.body.id;
    var isMain = req.body.isMain;
    Product.findOne({_id : id}, function (err, product) {
        if (err) {
            if(err) throw err;
            return res.json({success: false, message: 'Product do not exits'});
        } else {
            if(product != null) {
                product.isMain = isMain;
                product.save(function (err) {
                    if(err) {
                        return res.json({success: false, message: 'Update error'});
                    } else {
                        return res.json({success: true, message: 'Update success', data: product});
                    }
                });
            } else {
                return res.json({success: false, message: 'Product do not exits'});
            }
        }
    });
});

module.exports = router;