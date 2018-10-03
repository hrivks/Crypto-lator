module.exports = (function() {

    var api = {
        getComments: getComments,
        createComment: createComment,
        deleteComment: deleteComment,
        updateComment: updateComment,
        deleteCommentsByDiscussionId: deleteCommentsByDiscussionId
    };

    var mongoose = require('mongoose');
    var q = require('q');

    var CommentSchema = require('./comment.schema.server')();
    var CommentModel = mongoose.model('CommentModel', CommentSchema);


    return api;

    function getComments(discussionId) {
        return CommentModel.find({
            discussion: discussionId
        });
    }

    function createComment(comment) {
        return CommentModel.create(comment);
    }

    function updateComment(commentId, comment) {
        return CommentModel.findByIdAndUpdate(commentId, comment, {
            new: true
        });
    }

    function deleteComment(commentId) {
        return CommentModel.findByIdAndRemove(commentId);
    }

    function deleteCommentsByDiscussionId(discussionId) {
        return CommentModel.deleteMany({
            discussion: discussionId
        });
    }

})();