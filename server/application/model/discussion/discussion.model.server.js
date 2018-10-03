module.exports = (function() {

    var api = {
        getDiscussions: getDiscussions,
        createDiscussion: createDiscussion,
        deleteDiscussion: deleteDiscussion,
        updateDiscussion: updateDiscussion
    };

    var mongoose = require('mongoose');
    var q = require('q');

    var DiscussionSchema = require('./discussion.schema.server')();
    var DiscussionModel = mongoose.model('DiscussionModel', DiscussionSchema);


    return api;

    function getDiscussions() {
        return DiscussionModel.find({}, null, {
            sort: {
                'dateCreated': -1
            }
        });
    }

    function createDiscussion(discussion) {
        return DiscussionModel.create(discussion);
    }

    function updateDiscussion(discussionId, discussion) {
        return DiscussionModel.findByIdAndUpdate(discussionId, discussion, {
            new: true
        });
    }

    function deleteDiscussion(discussionId) {
        return DiscussionModel.findByIdAndRemove(discussionId);
    }

})();