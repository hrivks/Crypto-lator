module.exports = function() {
    var mongoose = require('mongoose');

    var options = {
        collection: 'users',
        timestamps: {
            createdAt: 'dateCreated'
        }
    };

    var UserSchema = mongoose.Schema({
        username: String,
        password: String,
        name: String,
        email: String,
        userType: String,
    }, options);

    return UserSchema;
};