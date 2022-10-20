const { Router } = require( 'express' );
// Controllers
const {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById
} = require('../controllers/users');

/*
  PATH: '/api/users'
*/
const router = Router();

router.get( '/', getUsers );
router.get( '/:id', getUserById );
router.post( '/', createUser )
router.put( '/:id', updateUserById )
router.delete( '/:id', deleteUserById )

module.exports = router;
