const bcrypt = require("bcryptjs");

const config = require("../config.json");

const encrypt = async (text) => {
    return await bcrypt.hash(text, bcrypt.genSalt(config.SALT_ROUNDS));
};

const compare = (text, hash) => {
    return await bcrypt.compare(text, hash);
};

module.exports = {
    encrypt,
    compare
}