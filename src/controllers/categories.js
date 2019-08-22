const Category = require('../models/category');

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
    }
}