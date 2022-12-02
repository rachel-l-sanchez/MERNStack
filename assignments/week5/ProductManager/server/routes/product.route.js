const Controller = require('../controllers/product.controller');
 
module.exports = app => {
    app.get('/products', Controller.findAllProducts);
    app.post('/create/products', Controller.createProduct);
}
