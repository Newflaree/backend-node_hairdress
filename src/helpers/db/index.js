const { productBrandIdValidation } = require( './product-brands' );
const { productCategoryIdValidation } = require( './product-categories' );
const { productIdValidation } = require( './products' );

module.exports = {
  productIdValidation,
  productCategoryIdValidation,
  productBrandIdValidation
}
