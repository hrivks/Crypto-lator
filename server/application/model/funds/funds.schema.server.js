module.exports = function() {
    var mongoose = require('mongoose');

    var options = {
        collection: 'funds',
        timestamps: {
            createdAt: 'dateCreated'
        }
    };

    var FundsSchema = mongoose.Schema({
        portfolioId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'portfolio'
        },
        name: String,
        quantity: Number
    }, options);

    return FundsSchema;
};