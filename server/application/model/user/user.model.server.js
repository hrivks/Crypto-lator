module.exports = (function() {

    var api = {
        createUser: createUser,
        updateUser: updateUser,
        deleteUser: deleteUser,
        findUserById: findUserById,
        findUserByCredentials: findUserByCredentials,
        findUserByUsername: findUserByUsername,
        allUsers: allUsers
    };

    var mongoose = require('mongoose');
    var q = require('q');

    var UserSchema = require('./user.schema.server')();
    var UserModel = mongoose.model('UserModel', UserSchema);
    let portfolioModel = require('../portfolio/portfolio.model.server');

    return api;

    function allUsers() {
        return UserModel.find();
    }

    function createUser(user) {
        let def = q.defer();
        UserModel
            .create(user)
            .then((createdUser) => {
                portfolioModel
                    .createPortfolio(createdUser._id)
                    .then((createdPortfolio) => {
                        def.resolve(createdUser);
                    }, (err) => {
                        def.reject(err);
                    });
            }, (err) => {
                def.reject(err);
            });

        return def.promise;
    }


    function deleteUser(userId) {
        var deferred = q.defer();
        UserModel.remove({
            _id: userId
        }, function(err, status) {
            if (err)
                deferred.reject(err);
            else
                deferred.resolve(status)
        });

        return deferred.promise;
    }


    function updateUser(userId, updatedUser) {
        var deferred = q.defer();

        var modelToChoose = UserModel;
        if (updatedUser.userType === "appOwner")
            modelToChoose = AppOwnerModel;

        modelToChoose.findByIdAndUpdate({
            _id: userId
        }, {
            $set: updatedUser,
            $setOnInsert: updatedUser
        }, {
            new: true
        }, function(err, user) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(user);
            }
        });

        return deferred.promise;
    }

    function findUserById(userId) {
        return UserModel.findById(userId);
    }

    function findUserByCredentials(username, password) {
        return UserModel.findOne({
            username: username,
            password: password
        });
    }

    function findUserByUsername(username) {
        return UserModel.findOne({
            username: username
        });
    }
})();