const router = require('express').Router();
const createError = require('http-errors');
const bodyParser = require('body-parser');
const auth = require('./auth');
const user = require('./user');
const product = require('./products');

router.use('/auth', auth);
router.use('/user', user);
router.use('/product', product);

router.use(async (req, res, next) => {
  next(createError.NotFound('Route not Found'));
});

module.exports = router;
