module.exports = (function(app) {

    const request = require('request');
    let q = require('q');

    // local cache
    let currency = [];
    let lastUpdated = null;

    api = {
        getAll: getAll,
        getById: getById
    }

    return api;

    function getAll() {
        const def = q.defer();
        if (currency.length == 0 || (lastUpdated - new Date()) > 60000) {

            request('https://api.coinmarketcap.com/v1/ticker/', {
                json: true
            }, (err, res, body) => {
                if (err) {
                    def.reject(currency);
                }

                currency = body.map((i) => {
                    return {
                        id: i.id,
                        name: i.name,
                        symbol: i.symbol,
                        rank: i.rank,
                        value: i.price_usd
                    };
                });
                lastUpdated = new Date();
                console.log("Currency updated");
                def.resolve(currency);
            });

        } else {
            def.resolve(currency);
        }
        return def.promise;
    }


    function getById(id) {
        const def = q.defer();

        getAll().then((currency) => {
            let thisCurrency = currency.find((i) => {
                return i.id == id;
            });
            def.resolve(thisCurrency);
        }, (err) => {
            def.reject(err);
        })

        return def.promise;
    }

})();