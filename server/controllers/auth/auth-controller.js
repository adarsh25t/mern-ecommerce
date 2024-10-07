const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

// * Register

const registerUser = async (req, res) => {
    const { userName, email, password } = req.body;

    try {


        // * hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        // * create new user instance
        const newUser = await new User({
            userName,
            email,
            password: hashedPassword
        });

        // * save user to database
        await newUser.save();

        // * return response 
        res.status(200).json({
            success: true,
            message: 'User registered successfully'
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'something went wrong!'
        })
    }
}


// * Login
const login = (req, res) => {
    const { email, password } = req.body;

    try {

    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'something went wrong!'
        })
    }
}



// * Logout




// * auth middleware




module.exports = {
    registerUser
}
