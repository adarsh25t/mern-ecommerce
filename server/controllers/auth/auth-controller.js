const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

// * Register

const registerUser = async (req, res) => {
    const { userName, email, password } = req.body;

    try {

        // * check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(200).json({
                success: false,
                message: 'User already exists'
            });
        }

        // * verify unique username 
        const existingUser = await User.findOne({ userName });
        if (existingUser) {
            return res.status(200).json({
                success: false,
                message: 'Username already exists'
            });
        }

        // * validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(200).json({
                success: false,
                message: 'Invalid email format'
            });
        }

        // * validate password length
        if (password.length < 6) {
            return res.status(200).json({
                success: false,
                message: 'Password must be at least 6 characters long'
            });
        }

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
