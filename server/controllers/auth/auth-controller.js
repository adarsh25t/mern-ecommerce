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
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {

        // * check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(200).json({
                success: false,
                message: 'User not found'
            });
        }

        // * compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(200).json({
                success: false,
                message: 'Invalid password'
            });
        }

        // * generate token
        const token = jwt.sign({
            id: user._id,
            role: user.role,
            email: user.email
        }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // * return response with cookie
        res.cookie("auth_token", token, {
            expires: new Date(Date.now() + 3600000), // 1 hour
            httpOnly: true,
            secure: false
        }).status(200).json({
            success: true,
            message: 'User logged in successfully',
            user: {
                id: user._id,
                role: user.role,
                email: user.email
            }
        })

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
const logoutUser = (req, res) => {
    res.clearCookie("auth_token").status(200).json({
        success: true,
        message: 'User logged out successfully'
    })
}



// * auth middleware
const authMiddleware = (req, res, next) => {
    
    const token = req.cookies.auth_token;
    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Unauthorized'
        });
    }

    try {
       
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({
                    success: false,
                    message: 'Access denied'
                });
            }
            req.user = user;
            next();
        });

    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'Unauthorized'
        });
    }
}



module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    authMiddleware
}
