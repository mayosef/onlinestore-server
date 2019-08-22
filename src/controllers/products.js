const Product = require('../models/product');

module.exports = {
    getAll: (req, res) => {
        Product.find()
            .then(products => res.json(products))
            .catch(err => res.status(500).json(err))
    },
    createProduct: (req, res) => {
        const product = new Product(req.body);
        product.save()
            .then(() => res.status(201).json(product))
            .catch(err => res.status(400).json(err))
    }
}