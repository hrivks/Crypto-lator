module.exports = (function() {

    var api = {
        getFunds: getFunds,
        createFund: createFund,
        deleteFund: deleteFund,
        updateFund: updateFund,
        getFundByName: getFundByName
    };

    var mongoose = require('mongoose');
    var q = require('q');

    var FundsSchema = require('./funds.schema.server')();
    var FundsModel = mongoose.model('FundsModel', FundsSchema);


    return api;

    function getFunds(portfolioId) {
        return FundsModel.find({
            portfolioId: portfolioId
        });
    }

    function createFund(fund) {
        return FundsModel.create(fund);
    }

    function updateFund(fundId, fund) {
        return FundsModel.findByIdAndUpdate(fundId, fund, {
            new: true
        });
    }

    function deleteFund(fundId) {
        return FundsModel.findByIdAndRemove(fundId);
    }

    function getFundByName(portfolioId, fundName) {
        return FundsModel.findOne({
            portfolioId: portfolioId,
            name: fundName
        });
    }

})();