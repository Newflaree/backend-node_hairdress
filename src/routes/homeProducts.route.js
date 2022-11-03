const { Router } = require( 'express' );
const { check } = require( 'express-validator' );
// Controllers
// Helpers
// Middlewares
const { validateFields, validateJWT } = require( '../middlewares' );

/*
  PATH: '/api/auth'
*/
const router = Router();

router.get( '/', getHomeProducts );

module.exports = router;
