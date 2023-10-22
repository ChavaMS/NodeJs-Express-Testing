'use strict'

const MONGOOSE = require('mongoose');
var APP = require('./app');
require('dotenv').config({ path: '.env' });

const HOST = process.env.PORT || '0.0.0.0';
const PORT = process.env.PORT || 3000;



//DB Connection
MONGOOSE.Promise = global.Promise;
MONGOOSE.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database successfully connected.');

        //Server
        APP.listen(PORT, HOST, () => {
            console.log('Server running on ' + HOST + ':' + PORT);
        });

    }).catch(err => {
        console.log(err);
    });