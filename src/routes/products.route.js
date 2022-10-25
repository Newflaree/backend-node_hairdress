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
  validateJWT
], createProduct );

router.get( '/', [
  validateJWT
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
