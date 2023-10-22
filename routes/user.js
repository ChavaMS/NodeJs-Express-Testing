const USER_CONTROLLER = require('../controllers/user');

const EXPRESS = require('express');
const API = EXPRESS.Router();

API.post('/register', USER_CONTROLLER.registerUser);


module.exports = API;