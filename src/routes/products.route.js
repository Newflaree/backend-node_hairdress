const { Router } = require( 'express' );
const { check } = require( 'express-validator' );
// Controllers
const {
  createProduct,
  deleteProductById,
  getProductById,
  getProducts,
  updateProductById
} = require( '../controllers/products' );
// Helpers
const { productBrandIdValidation } = require( '../helpers/db/product-brands' );
const { productCategoryIdValidation } = require( '../helpers/db/product-categories' );
// Middlewares
const {
  validateJWT,
  validateRole,
  validateFields
} = require( '../middlewares' );

/*
  PATH: '/api/products
*/
const router = Router();

router.post( '/', [
  validateJWT,
  validateRole,
  check( 'name', 'El nombre del producto es obligatorio' ).not().isEmpty(),
  check( 'desc', 'La descripción del producto es obligatoria' ).not().isEmpty(),
  check( 'img', 'La imágen del producto es obligatoria' ).not().isEmpty(),
  check( 'price', 'El precio del producto es obligatorio' ).not().isEmpty(),
  check( 'category', 'La Categoría del producto es obligatoria' ).isMongoId(),
  check( 'category' ).custom( productCategoryIdValidation ),
  check( 'brand', 'La marca del producto es obligatoria' ).isMongoId(),
  check( 'brand' ).custom( productBrandIdValidation ),
  validateFields
], createProduct );

router.get( '/', [
  validateJWT,
  validateFields
], getProducts );

router.get( '/:id', [
  validateJWT
], getProductById );

router.put( '/:id', [
  validateJWT
], updateProductById );

router.delete( '/:id', [
  validateJWT
], deleteProductById );

module.exports = router;
