const { Router } = require( 'express' );
const { check } = require( 'express-validator' );
// Controllers
// Helpers
const { allowedCollections } = require( '../helpers/db' );
// Middlewares
const {
  validateFields,
  validateJWT,
  validateRole
} = require( '../middlewares' );

/*
  PATH: '/api/uploads'
*/
const router = Router();

router.get( '/', );

router.put( '/:collection/:id', [
  validateJWT,
  validateRole,
  check( 'id', 'Invalid Mongo ID' ).isMongoId(),
  check( 'collection' ).custom( c => allowedCollections( c, [ 'products' ] ) ),
  validateFields
], );

module.exports = router;
