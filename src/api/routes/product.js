const router = require('express').Router();
const res = require('express/lib/response');
const { isAuthenticated } = require('../middleware/authentication');
const {
  getAllProducts,
  createProduct,
  updateProductById,
  findProductById,
  createProductReminder,
  getRemindersForProduct,
} = require('../services/product.services');

router.get('/allProducts', async (req, res, next) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.get('/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await findProductById(productId);
    res.json(product);
  } catch (err) {
    next(err);
  }
});

router.post('/add', isAuthenticated, async (req, res, next) => {
  try {
    if (req.role == 'Admin') {
      const { name, price, imageUrl } = req.body;
      const product = await createProduct({ name, price, imageUrl });
      res.json(product);
    } else {
      res.status(403).send('Unauthorized access');
    }
  } catch (err) {
    next(err);
  }
});

router.put('/:productId/edit', isAuthenticated, async (req, res, next) => {
  try {
    const { productId } = req.params;
    if (req.role == 'Admin') {
      const { name, price, imageUrl } = req.body;
      const data = { name, price, imageUrl };
      const product = await updateProductById(productId, data);
      res.json(product);
    } else {
      res.status(403).send('Unauthorized access');
    }
  } catch (err) {
    next(err);
  }
});

router.post('/:productId/addReminder', isAuthenticated, async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await findProductById(productId);
    if (!productId) {
      res.status(400).send('Product doesnt exist, cant create a reminder :(');
    }
    const productReminder = await createProductReminder(product, req.user);
    res.json(productReminder);
  } catch (err) {
    next(err);
  }
});

router.get('/:productId/allReminders', async (req, res, next) => {
  try {
    const { productId } = req.params;
    const productWithReminders = await getRemindersForProduct(productId);
    if (!productWithReminders) {
      res.status(400).send('Product doesnt exist, cant get reminders :(');
    }
    res.json(productWithReminders);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
