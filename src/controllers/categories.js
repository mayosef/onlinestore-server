const Category = require('../models/category');
const Product = require('../models/product');
module.exports = {
    getAll: (req, res) => {
        Category.find()
            .then(categories => res.json(categories))
            .catch(err => res.status(500).json(err))
    },
    createCategory: (req, res) => {
        const category = new Category(req.body);
        category.save()
            .then(() => res.status(201).json(category))
            .catch(err => res.status(400).json(err))
    },
    products: (req, res) => {
        Product.find({
            categoryId: req.params.id
        })
        .then(products => res.json(products))
        .catch(err => res.status(500).json(err))
    }
}