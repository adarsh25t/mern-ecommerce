const express = require('express');
const { registerUser, loginUser, logoutUser, authMiddleware } = require('../../controllers/auth/auth-controller');


const route = express.Router();

route.post('/register', registerUser);
route.post('/login',loginUser);
route.post('/logout',logoutUser);
route.get('/check-auth', authMiddleware, (req,res) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        message: 'User authenticated',
        user
    })
})

module.exports = route;

