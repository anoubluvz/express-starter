const jwt = require("jsonwebtoken");

const config = require("../config.json");

const generateToken = async (data) => {    
    return await jwt.sign(data, config.JWT_SECRET);
};

const validateToken = async (token) => {
    const token = await jwt.verify(token, config.JWT_SECRET);

    let valid = false;
    if(token)
        valid = true;
    else
        valid = false;

    return { success: valid, token };
};

module.exports = {
    generateToken,
    validateToken
};