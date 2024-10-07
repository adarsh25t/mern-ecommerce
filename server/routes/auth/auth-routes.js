const express = require('express');
const { registerUser } = require('../../controllers/auth/auth-controller');


const route = express.Router();

route.post('/register', registerUser);


module.exports = route;

