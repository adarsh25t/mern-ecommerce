const { s3 } = require("../../lib/awsConfig");
const Product = require("../../models/Product");


// add new product
const addProduct = async (req, res) => {

    try {

        const file = req.file;
        const {
            title,
            description,
            category,
            brand,
            price,
            salePrice,
            totalStock
        } = req.body;

        console.log(req.body);
        

        // * Upload image to S3
        const fileName = `${Date.now()}-${file.originalname}`;
        const s3Params = {
            Bucket: "dev-await",
            Key: `ecommerce/products/${fileName}`,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: 'public-read',
        };

        const s3UploadResult = await s3.upload(s3Params).promise();
        if (!s3UploadResult) {
            return res.status(200).json({
                success: false,
                message: 'Failed to upload image to S3'
            });
        }

        const newProduct = new Product({
            title,
            description,
            category,
            brand,
            price,
            salePrice,
            totalStock,
            image: fileName
        });

        await newProduct.save();


        // * return response 
        res.status(201).json({
            success: true,
            message: 'Product added successfully'
        });

    } catch (error) {
        console.log(error);
        res.status(200).json({
            success: false,
            message: 'Failed to add product'
        })
    }
}

// get all products
const getAllProducts = (req, res) => {

    try {

    } catch (error) {
        return {
            success: false,
            message: 'Failed to get products'
        }
    }
}

// edit product
const editProduct = (req, res) => {

    try {

    } catch (error) {
        return {
            success: false,
            message: 'Failed to edit product'
        }
    }
}


// delete product

const deleteProduct = (req, res) => {

    try {

    } catch (error) {
        return {
            success: false,
            message: 'Failed to delete product'
        }
    }
}



module.exports = {
    addProduct,
    getAllProducts,
    editProduct,
    deleteProduct
}