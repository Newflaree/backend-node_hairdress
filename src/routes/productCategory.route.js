const { Router } = require( 'express' );
const { check } = require( 'express-validator' );
// Controllers
const {
  createProductCategory,
  deleteProductCategoryById,
  getProductCategories,
  getProductCategoryById,
  updateProductCategoryById
} = require( '../controllers/product-categories' );
// Helpers
const { productCategoryIdValidation } = require( '../helpers/db/product-categories' );
// Middlewares
const {
  validateJWT,
  validateRole,
  validateFields
} = require( '../middlewares' );

/*
  PATH: '/api/productCategory'
*/
const router = Router();

router.post( '/', [
  validateJWT,
  validateRole,
  check( 'name', 'El nombre de la categoría es obligatorio' ).not().isEmpty(),
  validateFields
], createProductCategory );

router.get( '/', [
  validateJWT,
  validateRole,
  validateFields
], getProductCategories );

router.get( '/:id', [
  validateJWT,
  validateRole,
  check( 'id', 'Invalid Mongo ID' ).isMongoId(),
  check( 'id' ).custom( productCategoryIdValidation ),
  validateFields
], getProductCategoryById );

router.put( '/:id', [
  validateJWT,
  validateRole,
  check( 'id', 'Invalid Mongo ID' ).isMongoId(),
  check( 'id' ).custom( productCategoryIdValidation ),
  validateFields
], updateProductCategoryById );

router.delete( '/:id', [
], deleteProductCategoryById );

module.exports = router;
