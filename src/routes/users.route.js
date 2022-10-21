const { Router } = require( 'express' );
const { check } = require( 'express-validator' );
// Controllers
const {
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById
} = require('../controllers/users');
// Helpers
const { idValidation } = require( '../helpers/db/users' );
// Middlewares
const {
  validateJWT,
  validateRole,
  validateFields
} = require( '../middlewares' );

/*
  PATH: '/api/users'
*/
const router = Router();

router.get( '/', [
  validateJWT,
  validateRole,
  validateFields
], getUsers );

router.get( '/:id', [
  validateJWT,
  validateRole,
  check( 'id', 'Invalid Mongo Id' ).isMongoId(),
  check( 'id' ).custom( idValidation ),
  validateFields
], getUserById );

router.put( '/:id', updateUserById )
router.delete( '/:id', deleteUserById )

module.exports = router;
