const { Router } = require( 'express' );
// Controllers
const {
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById
} = require('../controllers/users');
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

router.get( '/:id', getUserById );
router.put( '/:id', updateUserById )
router.delete( '/:id', deleteUserById )

module.exports = router;
