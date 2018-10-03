//#region imports
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
//#endregion

const app = express();

app.use(cookieParser());
app.use(session({
    secret: process.env.SESSION_SECRET || 'ABCDE',
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

//app.get('/api', require('./server/app.js'));

require('./server/app.js')(app);

app.use(express.static(path.join(__dirname, 'client/dist')));

// Redirect all other routes to index.html and let angular deal with it
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});


// Redirect all other routes to index.html and let angular deal with it
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});


const port = process.env.PORT || '3100';
app.set('port', port);

app.listen(port, () => console.log('Running on port : ' + port));