const express = require('express');
const connectToDB = require('./lib/db');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth/auth-routes');

// * load environment variables from.env file
dotenv.config();  

const app = express();
const PORT = process.env.PORT || 5000;

// * connect to database 
connectToDB()

app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: [
            'Content-Type', 
            'Authorization',
            'Cache-Control', 
            'Expires',
            'Pragma'
        ],
        credentials: true,
    }),
);

app.use(cookieParser());
app.use(express.json());

// * routes
app.use('/api/auth',authRoutes)


// * start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});