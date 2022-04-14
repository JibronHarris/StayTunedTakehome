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

function createProductReminder(product, userId) {
  return db.productReminder.create({
    data: {
      initialPrice: product.price,
      userId: userId,
      productId: product.id,
    },
  });
}

function getRemindersForProduct(id) {
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
  updateProductById,
  createProductReminder,
  getRemindersForProduct,
};
