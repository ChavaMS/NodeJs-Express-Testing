const BCRYPT = require('bcryptjs');

function hashPassword(password) {
    const salt = BCRYPT.genSaltSync();
    return BCRYPT.hashSync(password, salt);
}


module.exports = {
    hashPassword
}