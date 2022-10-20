const { Router } = require( 'express' );
// Controllers
const {
  createUser,
  loginUser,
  renewToken
} = require('../controllers/auth');

/*
  PATH: '/api/auth'
*/
const router = Router();

router.post( '/register', createUser );
router.post( '/login', loginUser );
router.get( '/renew', renewToken );

module.exports = router;
