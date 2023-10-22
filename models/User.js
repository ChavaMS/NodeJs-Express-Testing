'use strict'

// "User" entity creation
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    id: String,
    email: String,
    password: String,
});

module.exports = mongoose.model('Users', UserSchema);