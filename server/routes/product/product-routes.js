const express = require('express');
const multer = require('multer');
const { addProduct } = require('../../controllers/product/product-controller');

const route = express.Router();

// * Set up multer for handling file uploads
const upload = multer({ storage: multer.memoryStorage() });

route.post('/add', upload.single('image'),addProduct)



module.exports = route;