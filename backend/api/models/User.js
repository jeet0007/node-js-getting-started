var mongoose = require('mongoose');
var userSchima = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        validate: () => Promise.reject(new Error('Firstname Required'))
    },
    lastName: {
        type: String,
        required: [true, "Lastname is required"],
        validate: () => Promise.reject(new Error('lastname Required'))
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: () => Promise.resolve(false),
            message: "Email is required"
        }
    }
});

module.exports = mongoose.model('User', userSchima);