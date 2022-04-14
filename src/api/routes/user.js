const router = require('express').Router();
const { isAuthenticated } = require('../middleware/authentication');
const { findUserById } = require('../services/user.services');

router.get('/profile', isAuthenticated, async (req, res, next) => {
  try {
    const { userId } = req.payload;
    const user = await findUserById(userId);
    delete user.password;
    res.json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
