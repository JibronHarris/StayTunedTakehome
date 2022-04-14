const { db } = require('./db');

function createProduct(product) {
  return db.product.create({
    data: product,
  });
}

function getAllProducts() {
  return db.product.findMany();
}

function findProductById(id) {
  return db.product.findUnique({
    where: {
      id,
    },
  });
}

module.exports = {
  getAllProducts,
  findProductById,
  createProduct,
};
