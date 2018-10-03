module.exports = function() {
    var mongoose = require('mongoose');

    var options = {
        collection: 'comment',
        timestamps: {
            createdAt: 'dateCreated'
        }
    };

    var CommentSchema = mongoose.Schema({
        discussion: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'discussion'
        },
        text: String,
        isExpertAnswer: Boolean,
        createdBy: String
    }, options);

    return CommentSchema;
};