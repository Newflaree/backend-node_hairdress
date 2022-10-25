const { Router } = require( 'express' );
const { check } = require( 'express-validator' );
// Controllers
const {
  createProductBrand,
  deleteProductBrandById,
  getProductBrandById,
  getProductBrands,
  updateProductBrandById,
} = require( '../controllers/product-brands' );
// Helpers
const { productBrandIdValidation } = require( '../helpers/db/product-brands' );
// Middlewares
const {
  validateJWT,
  validateRole,
  validateFields
} = require( '../middlewares' );

/*
  PATH: '/api/productBrands
*/
const router = Router();

router.post( '/', [
  validateJWT,
  validateRole,
  check( 'name', 'El nombre de la categoría es obligatorio' ).not().isEmpty(),
  validateFields
], createProductBrand );

router.get( '/', [
  validateJWT,
  validateRole,
  validateFields
], getProductBrands );

router.get( '/:id', [
  validateJWT,
  validateRole,
  check( 'id', 'Invalid Mongo ID' ).isMongoId(),
  check( 'id' ).custom( productBrandIdValidation ),
  validateFields
], getProductBrandById );

router.put( '/:id', [
  validateJWT,
  validateRole,
  check( 'name', 'El nombre de la categoría es obligatorio' ).not().isEmpty(),
  check( 'id', 'Invalid Mongo ID' ).isMongoId(),
  check( 'id' ).custom( productBrandIdValidation ),
  validateFields
], updateProductBrandById );

router.delete( '/:id', [
  validateJWT,
  validateRole,
  check( 'id', 'Invalid Mongo ID' ).isMongoId(),
  check( 'id' ).custom( productBrandIdValidation ),
  validateFields
], deleteProductBrandById );

module.exports = router;
