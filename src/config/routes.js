const express = require('express');
const users = require('../controllers/users')
const categories = require('../controllers/categories');
const products = require('../controllers/products')
const authorization = require('./middlewares/authorization');
const multerProducts = require('./multer/products');


const apiRouter = express.Router();



apiRouter.get('/user', users.getAll);
apiRouter.put('/user', users.createUser);

apiRouter.get('/user/me', authorization , users.me)


apiRouter.post('/user/login', users.login)
apiRouter.get('/product', products.getAll);
apiRouter.put('/product', multerProducts.single('image'), products.createProduct);
apiRouter.post('/product/bulk', products.getByIds)

apiRouter.get('/product/:id', products.getById);

apiRouter.get('/category', categories.getAll);  
apiRouter.put('/category', categories.createCategory)
apiRouter.get('/category/:id/product', categories.products)




module.exports = apiRouter;