/** Common Utilities for Services */
module.exports = (function() {

    /**
     * Invoke a backend model function and send the response
     * @param {*} res Router Response object
     * @param {Function} fn Function to invoke
     * @param {*[]} args Arguments for the function
     */
    function sendResponse(res, fn, args) {
        try {
            fn(...args)
                .then((result) => {
                    res.json(result);
                }, (err) => {
                    res.status(400).json([err.message || err]);
                })
                .catch((err) => {
                    res.status(400).json([err.message || err]);
                });
        } catch (ex) {
            res.status(400).json([ex.message || ex]);
        }
    }

    /** Check if user is logged in */
    function checkAuth(req, res, next) {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.send(401);
        }
    }

    /** Check if user is admin */
    function checkAdmin(req, res, next) {
        if (req.user && req.user.userType === 'admin') {
            next();
        } else {
            res.send(401);
        }
    }

    /** Check if user is expert */
    function checkExpert(req, res, next) {
        if (req.user && req.user.userType === 'expert') {
            next();
        } else {
            res.send(401);
        }
    }

    /** Check if user is accessing his own objects */
    function checkSelf(req, res, next) {
        if (req.user._id.toString() === req.params.userId || req.user.userType === 'admin') {
            next();
        } else {
            res.send(401);
        }
    }

    return {
        sendResponse: sendResponse,
        checkAuth: checkAuth,
        checkAdmin: checkAdmin,
        checkExpert: checkExpert,
        checkSelf: checkSelf
    };

})();