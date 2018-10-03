module.exports = function(app, userModel) {

    const passport = require('passport');
    const bcrypt = require('bcrypt-nodejs');
    const util = require('./service-utils');

    app.post('/api/user/login', passport.authenticate('local'), login);
    app.post('/api/user/register', register);
    app.post('/api/user/logout', logout);
    app.get('/api/user/loggedIn', loggedIn);

    app.get('/api/user/all', util.checkAuth, util.checkAdmin, getAllUsers);

    app.post('/api/user', util.checkAuth, util.checkAdmin, createUser);
    //app.get('/api/user/:userId', util.checkAuth, findUserById);
    app.put('/api/user/:userId', util.checkAuth, util.checkSelf, updateUser);
    app.delete('/api/user/:userId', util.checkAuth, util.checkAdmin, deleteUser);


    function login(req, res) {
        var user = req.user;
        if (user) {
            user.password = '';
            res.json(user);
        } else {
            res.status(401).json({
                error: 'Invalid Credentials'
            });
        }
    }

    function register(req, res) {
        var user = req.body;
        if (!user) {
            req.status(500).json({
                error: 'invalid user object'
            });
        }

        userModel.findUserByUsername(user.username)
            .then((userExists) => {
                if (userExists) {
                    res.json(500).json({
                        error: 'username already exists'
                    });
                } else {
                    user.password = bcrypt.hashSync(user.password);
                    user.userType = 'user';
                    userModel.createUser(user).then((user) => {
                        req.login(user, function(err) {
                            if (err) {
                                res.sendStatus(500);
                            } else {
                                req.session.save(() => {
                                    user.password = '';
                                    res.send(user);
                                });
                            }
                        });
                    });
                }
            }, (err) => {
                res.json(500).json({
                    error: err
                });
            });
    }

    function logout(req, res) {
        req.logOut();
        req.session.destroy();
        res.clearCookie('connect.sid');
        res.json({
            result: 'logout successful'
        });
    }

    function loggedIn(req, res) {
        if (req.isAuthenticated()) {
            res.json(req.user);
        } else {
            res.json(false);
        }
    }

    function createUser(req, res) {
        var user = req.body;
        if (!user) {
            req.status(500).json({
                error: 'invalid user object'
            });
        }

        userModel.findUserByUsername(user.username)
            .then((userExists) => {
                if (userExists) {
                    res.json(500).json({
                        error: 'username already exists'
                    });
                } else {
                    user.password = bcrypt.hashSync(user.password);
                    userModel.createUser(user).then((user) => {
                        user.password = '';
                        res.json(user);
                    }, (err) => {
                        res.status(500).json({
                            error: err
                        });
                    });
                }
            }, (err) => {
                res.json(500).json({
                    error: err
                });
            });
    }

    function updateUser(req, res) {
        var updatedUser = req.body;

        if (updatedUser.password) {
            updatedUser.password = bcrypt.hashSync(updatedUser.password);
        } else {
            updatedUser.password = req.user.password;
        }

        userModel.updateUser(req.params.userId, updatedUser)
            .then((updatedUser) => {
                updatedUser.password = '';
                res.json(updatedUser);
            }, (err) => {
                res.status(500).json({
                    error: err
                });
            });

    }

    function deleteUser(req, res) {
        var userId = req.params.userId;

        userModel.deleteUser(userId).then(function(user) {
            res.json(user);
        }, function(err) {
            res.statu(500).json({
                error: err
            });
        });
    }


    function getAllUsers(req, res) {
        userModel.allUsers()
            .then((users) => {
                users.forEach((i) => {
                    i.password = '';
                });
                res.json(users);
            }, (err) => {
                res.status(500).json({
                    error: err
                });
            });
    }
};