module.exports = function(app) {

    require("./db/connection"); // establish connection to the DB

    let models = require('./application/model/models.server')();

    require('./auth')(models.userModel);
    require('./application/services/user.service.server')(app, models.userModel);
    require('./application/services/portfolio.service.server')(app, models.portfolioModel);
    require('./application/services/fund.service.server')(app, models.fundsModel, models.portfolioModel);
    require('./application/services/discussion.service.server')(app, models.discussionModel, models.commentModel);
    require('./application/services/comment.service.server')(app, models.commentModel);
};