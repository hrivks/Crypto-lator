module.exports = (function() {

    var api = {
        getPortfolioOfUser: getPortfolioOfUser,
        getPortfolioById: getPortfolioById,
        createPortfolio: createPortfolio,
        updatePortfolio: updatePortfolio,
        deletePortfolio: deletePortfolio
    };

    var mongoose = require('mongoose');

    var q = require('q');

    var PortfolioSchema = require('./portfolio.schema.server')();
    var PortfolioModel = mongoose.model('PortfolioModel', PortfolioSchema);

    function createPortfolio(userId) {
        return PortfolioModel.create({
            userId: userId,
            amount: 20000
        });
    }

    function getPortfolioOfUser(userId) {
        return PortfolioModel.findOne({
            userId: userId
        });
    }

    function getPortfolioById(id) {
        return PortfolioModel.findById(id);
    }

    function updatePortfolio(portfolioId, newPortfolio) {
        return PortfolioModel.findByIdAndUpdate(portfolioId, newPortfolio, {
            new: true
        })
    }

    function deletePortfolio(portfolioId) {
        return PortfolioModel.findByIdAndRemove(portfolioId);
    }

    return api;

})();