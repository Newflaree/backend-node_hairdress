const { Router } = require( 'express' );
const { check } = require( 'express-validator' );
// Controllers
const {
  setHomeProduct,
  getHomeProducts,
  deleteHomeProductById
} = require('../controllers/home-maintenance/home-products');
// Helpers
const { homeProductIdValidation } = require('../helpers/db/home-maintenance');
const { productIdValidation } = require('../helpers/db/products');
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
  check( 'id', 'Invalid Mongo ID' ).isMongoId(),
  check( 'id' ).custom( productIdValidation ),
  validateFields
], setHomeProduct );

router.get( '/', getHomeProducts );

router.delete( '/:id', [
  validateJWT,
  validateRole,
  check( 'id', 'Invalid Mongo ID' ).isMongoId(),
  check( 'id' ).custom( homeProductIdValidation ),
  validateFields
], deleteHomeProductById );

module.exports = router;
