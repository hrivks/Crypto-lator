module.exports = function(app, fundsModel, portfolioModel) {

    const utils = require('./service-utils');

    app.get('/api/portfolio/:portfolioId/funds', utils.checkAuth, getFunds);
    app.post('/api/portfolio/:portfolioId/funds/update', utils.checkAuth, updateFund);

    let currencyService = require('./currency.service.server');

    function getFunds(req, res) {
        let portfolioId = req.params.portfolioId;
        fundsModel.getFunds(portfolioId)
            .then((funds) => {
                res.json(funds);
            }, (err) => {
                res.status(500).json(err);
            });
    }

    function updateFund(req, res) {
        let newFund = req.body;
        let portfolioId = req.params.portfolioId;
        newFund.portfolioId = portfolioId;
        if (!newFund) {
            res.status(500).json({
                error: 'Invalid fund object'
            });
        } else {

            currencyService.getById(newFund.name)
                .then((currency) => {

                    // get user portfolio
                    const amountChange = currency.value * newFund.quantity;

                    portfolioModel.getPortfolioById(portfolioId)
                        .then((userPortfolio) => {

                            userPortfolio.amount -= amountChange;

                            if (userPortfolio.amount < 0) {
                                res.status(500).json({
                                    error: 'Insufficient funds'
                                });
                            } else {

                                // update user portfolio amount
                                portfolioModel.updatePortfolio(portfolioId, userPortfolio)
                                    .then((updatedPortfolio) => {

                                        // update fund
                                        // check if fund is already available
                                        fundsModel.getFundByName(newFund.portfolioId, newFund.name)
                                            .then((fundExists) => {

                                                if (fundExists) {
                                                    // update the existing fund
                                                    fundExists.quantity += newFund.quantity;
                                                    if (fundExists.quantity == 0) {
                                                        // fund is sold out. remove 
                                                        fundsModel.deleteFund(fundExists._id)
                                                            .then((deletedFund) => {
                                                                res.json(deletedFund);
                                                            }, (err) => {
                                                                res.status(500).json(err);
                                                            });
                                                    } else {
                                                        // update exiting fund
                                                        fundsModel.updateFund(fundExists._id, fundExists)
                                                            .then((updatedFund) => {
                                                                res.json(updatedFund);
                                                            }, (err) => {
                                                                res.status(500).json({
                                                                    error: err,
                                                                    message: 'Error adding to existing fund'
                                                                });
                                                            });
                                                    }
                                                } else {
                                                    // fund does not exist. create new fund
                                                    fundsModel.createFund(newFund)
                                                        .then((createdFund) => {

                                                            res.json(createdFund);
                                                        }, (err) => {
                                                            res.status(500).json(err);
                                                        });
                                                }
                                            }, (err) => {
                                                res.status(500).json(err);
                                            });
                                    }, (err) => {
                                        res.status(500).json(err);
                                    });
                            }

                        }, (err) => {
                            res.status(500).json(err);
                        });

                }, (err) => {
                    res.status(500).json(err);
                });
        }
    }

};