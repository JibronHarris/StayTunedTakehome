const jwt = require('jsonwebtoken');

function isLoggedIn(req) {
  const { authorization } = req.headers;

  if (!authorization) {
    return false;
  } else {
    return true;
  }
}

function isAuthenticated(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401);
    throw new Error('🚫 Un-Authorized 🚫');
  }

  try {
    const token = authorization.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    req.payload = payload;
    req.role = payload.role;
    req.user = payload.userId;
  } catch (err) {
    res.status(401);
    if (err.name == 'TokenExpiredError') {
      throw new Error(err.name);
    }
    throw new Error('🚫 Un-Authorized 🚫');
  }

  return next();
}

module.exports = {
  isAuthenticated,
  isLoggedIn,
};
