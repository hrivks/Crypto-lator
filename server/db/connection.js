module.exports = (function() {

    var mongoose = require("mongoose");
    var connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/cryptocaster';

    mongoose.connect(connectionString);
})();