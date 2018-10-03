module.exports = function(app, discussionModel, commentModel) {

    const utils = require('./service-utils');

    app.get('/api/discussions', getDiscussions);
    app.post('/api/discussions/', utils.checkAuth, createDiscussion);
    app.put('/api/discussions/:discussionId', utils.checkAuth, updateDiscussion);
    app.delete('/api/discussions/:discussionId', utils.checkAuth, deleteDiscussion);

    function getDiscussions(req, res) {

        discussionModel.getDiscussions().then((discussions) => {
            res.json(discussions);
        }, (err) => {
            res.status(500).json(err);
        });
    }

    function createDiscussion(req, res) {
        const username = req.user.username;
        let discussion = req.body;
        discussion.createdBy = username;
        if (discussion) {
            discussionModel.createDiscussion(discussion)
                .then((discussion) => {
                    res.json(discussion);
                }, (err) => {
                    res.status(500).json(err);
                });
        } else {
            res.status(500).json({
                error: 'Invalid discussion object'
            });
        }
    }

    function updateDiscussion(req, res) {
        let discussionId = req.params.discussionId;
        let updatedDiscussion = req.body;
        if (updatedDiscussion) {
            discussionModel.updateDiscussion(discussionId, updatedDiscussion)
                .then((discussion) => {
                    res.json(discussion);
                }, (err) => {
                    res.status(500).json(err);
                });
        } else {
            res.status(500).json({
                error: 'Invalid discussion object'
            });
        }
    }

    function deleteDiscussion(req, res) {
        let discussionId = req.params.discussionId;
        if (discussionId) {
            discussionModel.deleteDiscussion(discussionId)
                .then((discussion) => {
                    commentModel.deleteCommentsByDiscussionId(discussionId)
                        .then(() => {
                            res.json(discussion);
                        }, (err) => {
                            res.status(500).json(err);
                        });

                }, (err) => {
                    res.status(500).json(err);
                });
        } else {
            res.status(500).json({
                error: 'Invalid discussion Id'
            });
        }
    }


};