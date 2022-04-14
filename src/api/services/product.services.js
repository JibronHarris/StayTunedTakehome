const { db } = require('./db');

function getAllProducts() {
  return db.product.findMany();
}

module.exports = {
  getAllProducts,
};
