module.exports = function(app, commentModel) {

    const utils = require('./service-utils');

    app.get('/api/discussions/:discussionId/comments', getComments);
    app.post('/api/discussions/:discussionId/comments', utils.checkAuth, createComment);
    app.put('/api/discussions/:discussionId/comments/:commentId', utils.checkAuth, updateComment);
    app.delete('/api/discussions/:discussionId/comments/:commentId', utils.checkAuth, deleteComment);

    function getComments(req, res) {
        commentModel.getComments(req.params.discussionId).then((comments) => {
            res.json(comments);
        }, (err) => {
            res.status(500).json(err);
        });
    }

    function createComment(req, res) {
        const comment = req.body;
        if (comment) {
            comment.discussion = req.params.discussionId;
            const user = req.user;
            comment.isExpertAnswer = user.userType == 'expert';
            comment.createdBy = user.username;
            commentModel.createComment(comment)
                .then((createdComment) => {
                    res.json(createdComment);
                }, (err) => {
                    res.status(500).json(err);
                });
        } else {
            res.status(500).json({
                error: 'Invalid comment object'
            });
        }
    }

    function updateComment(req, res) {
        let commentId = req.params.commentId;
        let updatedComment = req.body;
        if (updatedComment) {
            commentModel.updateComment(commentId, updatedComment)
                .then((updatedComment) => {
                    res.json(updatedComment);
                }, (err) => {
                    res.status(500).json(err);
                });
        } else {
            res.status(500).json({
                error: 'Invalid comment object'
            });
        }
    }

    function deleteComment(req, res) {
        let commentId = req.params.commentId;
        if (commentId) {
            commentModel.deleteComment(commentId)
                .then((comment) => {
                    res.json(comment);
                }, (err) => {
                    res.status(500).json(err);
                });
        } else {
            res.status(500).json({
                error: 'Invalid comment Id'
            });
        }
    }


};