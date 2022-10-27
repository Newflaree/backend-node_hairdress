const createProductService = require( './createProduct.service' );
const deleteProductByIdService = require( './deleteProductById.service' );
const getProductByIdService = require( './getProductById.service' );
const getProductsService = require( './getProducts.service' );
const updateProductByIdService = require( './updateProductById.service' );

module.exports = {
  createProductService,
  deleteProductByIdService,
  getProductByIdService,
  getProductsService,
  updateProductByIdService
}
