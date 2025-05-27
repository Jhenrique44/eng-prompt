const express = require('express');
const ProductController = require('../controllers/productController');
const validationMiddleware = require('../middlewares/validationMiddleware');

const router = express.Router();
const productController = new ProductController();

function setProductRoutes(app) {
    router.post('/products', validationMiddleware.validateProductCreation, productController.createProduct);
    router.put('/products/:id', validationMiddleware.validateProductEditing, productController.editProduct);

    app.use('/api', router);
}

module.exports = setProductRoutes;