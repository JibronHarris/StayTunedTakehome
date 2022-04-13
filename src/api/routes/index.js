const router = require('express').Router();
const createError = require('http-errors');
const bodyParser = require('body-parser');
const auth = require('./auth');

router.use('/auth', auth);

router.use(async (req, res, next) => {
  next(createError.NotFound('Route not Found'));
});

module.exports = router;
