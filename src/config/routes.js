const express = require('express');
const users = require('../controllers/users')
const categories = require('../controllers/categories');
const products = require('../controllers/products')
const authorization = require('./middlewares/authorization');
const apiRouter = express.Router();


apiRouter.get('/user', users.getAll);
apiRouter.put('/user', users.createUser);

apiRouter.get('/user/me', authorization , users.me)

apiRouter.post('/user/login', users.login)
apiRouter.get('/product', products.getAll);
apiRouter.put('/product', products.createProduct)


apiRouter.get('/category', categories.getAll);
apiRouter.put('/category', categories.createCategory)

module.exports = apiRouter;