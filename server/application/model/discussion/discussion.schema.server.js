module.exports = function() {
    var mongoose = require('mongoose');

    var options = {
        collection: 'discussion',
        timestamps: {
            createdAt: 'dateCreated'
        }
    };

    var DiscussionSchema = mongoose.Schema({
        title: String,
        description: String,
        createdBy: String
    }, options);

    return DiscussionSchema;
};