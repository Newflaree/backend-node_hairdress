const createProductBrand = require( './createProductBrand.controller' );
const deleteProductBrandById = require( './deleteProductBrandById.controller' );
const getProductBrandById = require('./getProductBrandById.controller');
const getProductBrands = require('./getProductBrands.controller');
const updateProductBrandById = require('./updateProductBrandById.controller');

module.exports = {
  createProductBrand,
  deleteProductBrandById,
  getProductBrandById,
  getProductBrands,
  updateProductBrandById
}
