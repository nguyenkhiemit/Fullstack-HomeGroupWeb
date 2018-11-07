var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FileUpload = new Schema({
    originalName: {
        type: String
    },
    uploadName: {
        type: String
    }
});

var ProductSchema = new Schema({
    projectName: {
        type: String
    },
    category: {
        type: String
    },
    investor: {
        type: String
    },
    address: {
        type: String
    },
    area: {
        type: String
    },
    time: {
        type: String
    },
    images: {
        type: [FileUpload]
    },
    isMain: {
        type: Boolean
    }
});

module.exports = mongoose.model('Product', ProductSchema);

