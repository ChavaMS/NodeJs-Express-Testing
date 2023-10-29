const USER_CONTROLLER = require('../controllers/user');

const EXPRESS = require('express');
const API = EXPRESS.Router();

API.post('/register', USER_CONTROLLER.registerUser);

API.get('/test', USER_CONTROLLER.test);

module.exports = API;