var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    avatar: {
        type: String
    },
    content: {
        type: String
    }
});

module.exports = mongoose.model('Comment', CommentSchema);

