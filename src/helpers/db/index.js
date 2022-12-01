const allowedCollections = require('./allowedCollections.helper');
const priceFormater = require( './priceFormater.helper' );

const { ourServiceIdVatidation } = require( './our-services' );
const { ourServicesCategoryIdVatidation } = require( './our-services-categories' );
const { productBrandIdValidation } = require( './product-brands' );
const { productCategoryIdValidation } = require( './product-categories' );
const { productIdValidation, stockValidator } = require( './products' );

module.exports = {
  allowedCollections,
  priceFormater,

  ourServiceIdVatidation,
  ourServicesCategoryIdVatidation,
  productIdValidation,
  productCategoryIdValidation,
  productBrandIdValidation,
  stockValidator
}
