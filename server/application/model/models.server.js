module.exports = function() {

    let userModel = require('./user/user.model.server');
    let portfolioModel = require('./portfolio/portfolio.model.server');
    let fundsModel = require('./funds/funds.model.server');
    let discussionModel = require('./discussion/discussion.model.server');
    let commentModel = require('./comment/comment.model.server');

    let model = {
        userModel: userModel,
        portfolioModel: portfolioModel,
        fundsModel: fundsModel,
        discussionModel: discussionModel,
        commentModel: commentModel
    };

    return model;
};