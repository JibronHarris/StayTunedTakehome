const router = require('express').Router();
const { isAuthenticated } = require('../middleware/authentication');
const { getAllProducts } = require('../services/product.services');

router.get('/allProducts', async (req, res, next) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
