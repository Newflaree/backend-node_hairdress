const createProduct = require( './createProduct.controller' );
const deleteProductById = require( './deleteProductById.controller' );
const getProductById = require( './getProductById.controller' );
const getProducts = require( './getProducts.controller' );
const updateProductById = require( './updateProductById.controller' );

module.exports = {
  createProduct,
  deleteProductById,
  getProductById,
  getProducts,
  updateProductById
}
