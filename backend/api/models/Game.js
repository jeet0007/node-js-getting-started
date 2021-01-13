
var mongoose = require('mongoose');
var GameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    launchDate: {
        type: Date,
        default: Date.now(),
        required: true
    },
    url: {
        type: String,
        required: true
    },
    supports: {
        type: [String],
        required: true
    },
    images: {
        type: [String],
        required: true
    }
});
module.exports = mongoose.model('Game', GameSchema);