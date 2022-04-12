const router = require('express').Router();

router.get('/', async (req, res, next) => {
  res.send('HOME');
});

router.get('/cats', async (req, res, next) => {
  res.send('Cats');
});

module.exports = router;
