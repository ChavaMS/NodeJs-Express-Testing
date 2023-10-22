'use strict'

const BODYPARSER = require('body-parser');
const EXPRESS = require('express');
const APP = EXPRESS();

APP.use(BODYPARSER.urlencoded({ extended: false }));
APP.use(BODYPARSER.json());

const USER_ROUTES = require('./routes/user');

APP.use('/api/user', USER_ROUTES);

console.log('All good');

module.exports = APP;