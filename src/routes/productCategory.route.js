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
], getProductCategories );

router.get( '/:id', [
], getProductCategoryById );

router.put( '/:id', [
], updateProductCategoryById );

router.delete( '/:id', [
], deleteProductCategoryById );

module.exports = router;
