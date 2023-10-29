const User = require("../models/User");
const { hashPassword } = require("../utils/helpers");

async function registerUser(req, res) {
    const { email, password } = req.body;
    const userDB = await User.findOne({ email });
    if (userDB) {
        return res.status(400).send({ message: 'User already exists' });
    } else {
        const passwordEncrypted = hashPassword(password);
        await User.create({ password: passwordEncrypted, email })
        return res.send(201);
    }
}

function test(req, res) {
    return res.status(200).send({ mensaje: 'Hello world' });
}

module.exports = {
    registerUser,
    test
}