const { Router } = require( 'express' );
// Controllers
const { createUser, loginUser } = require('../controllers/auth');

/*
  PATH: '/api/auth'
*/
const router = Router();

router.post( '/register', createUser );
router.post( '/login', loginUser );

module.exports = router;
