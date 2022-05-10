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

function deleteProductById(id) {
  return db.product.delete({
    where: {
      id: id,
    },
  });
}

function createProductReminder(product, userId, email) {
  return db.productReminder.create({
    data: {
      initialPrice: product.price,
      userId: userId,
      email: email,
      productId: product.id,
    },
  });
}

function getRemindersForProduct(id) {
  return db.product.findUnique({
    where: {
      id,
    },
    include: {
      productReminders: true,
    },
  });
}

module.exports = {
  getAllProducts,
  findProductById,
  createProduct,
  updateProductById,
  deleteProductById,
  createProductReminder,
  getRemindersForProduct,
};
