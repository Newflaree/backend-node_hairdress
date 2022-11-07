const { Router } = require( 'express' );
const { check } = require( 'express-validator' );
// Controllers
const {
  setHomeProduct,
  getHomeProducts,
  deleteHomeProductById
} = require('../controllers/home-maintenance/home-products');
// Helpers
// Middlewares
const {
  validateFields,
  validateJWT,
  validateRole
} = require( '../middlewares' );

/*
  PATH: '/api/home-products'
*/
const router = Router();

router.post( '/:id', [
  validateJWT,
  validateRole,
  validateFields
], setHomeProduct );

router.get( '/', getHomeProducts );

router.delete( '/:id', [
  validateJWT,
  validateRole,
  validateFields
], deleteHomeProductById );

module.exports = router;
