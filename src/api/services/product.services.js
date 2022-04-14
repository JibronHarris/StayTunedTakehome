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

function updateProductById(id, data) {
  return db.product.update({
    where: {
      id: id,
    },
    data,
  });
}

module.exports = {
  getAllProducts,
  findProductById,
  createProduct,
  updateProductById,
};
