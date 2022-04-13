const router = require('express').Router();
const createError = require('http-errors');
const bodyParser = require('body-parser');
const auth = require('./auth');
const user = require('./user');

router.use('/auth', auth);
router.use('/user', user);

router.use(async (req, res, next) => {
  next(createError.NotFound('Route not Found'));
});

module.exports = router;
