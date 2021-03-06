//*** Dependencies ***//
//====================//
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const compression = require('compression');
const routes = require('./routes')

//*** Express set up ***//
//======================//
var PORT = process.env.PORT || 3001;
const app = express();

//*** Middleware ***//
//==================// 
app.use(logger('dev'));
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//*** Serve up static assets(heroku) ***//
//======================================//
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

//*** Routers ***//
//===============//
app.use(routes);

//*** Listener ***//
//================//
app.listen(PORT, () => { console.log(`App running on port ${PORT}!`) });