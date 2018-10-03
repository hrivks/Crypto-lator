module.exports = function() {
    var mongoose = require('mongoose');

    var options = {
        collection: 'portfolio'
    };

    var PortfolioSchema = mongoose.Schema({
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        },
        amount: Number
    }, options);

    return PortfolioSchema;
};