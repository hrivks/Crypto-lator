module.exports = function(app, portfolioModel) {

    const utils = require('./service-utils');

    app.get('/api/portfolio', utils.checkAuth, getPortfolio);
    app.put('/api/portfolio/:portfolioId', utils.checkAuth, updatePortfolio);

    function getPortfolio(req, res) {
        let userId = req.user._id;
        portfolioModel.getPortfolioOfUser(userId).then((portfolio) => {
            res.json(portfolio);
        }, (err) => {
            res.status(500).json(err);
        });
    }

    function updatePortfolio(req, res) {
        let portfolioId = req.params.portfolioId;
        let updatedPortfolio = req.body;
        if (updatedPortfolio) {
            portfolioModel.updatedPortfolio(portfolioId, updatedPortfolio)
                .then((portfolio) => {
                    res.json(portfolio);
                }, (err) => {
                    res.status(500).json(err);
                });
        } else {
            res.status(500).json({
                error: 'Invalid portfolio object'
            });
        }
    }


};