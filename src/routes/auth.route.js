const { Router } = require( 'express' );
const { check } = require( 'express-validator' );
// Controllers
const {
  createUser,
  loginUser,
  renewToken
} = require('../controllers/auth');
// Helpers
const { emailValidation } = require( '../helpers/db/users' );
// Middlewares
const { validateFields, validateJWT } = require( '../middlewares' );

/*
  PATH: '/api/auth'
*/
const router = Router();

router.post( '/register', [
  check( 'name', 'El nombre es obligatorio' ).not().isEmpty(),
  check( 'email', 'El email es obligatorio' ).isEmail(),
  check( 'email' ).custom( emailValidation ),
  check( 'password', 'La contraseña debe de tener al menos 6 carácteres' ).isLength({ min: 6 }),
  validateFields
], createUser );

router.post( '/login', [
  check( 'email', 'El email es obligatorio' ).isEmail(),
  check( 'password', 'La contraseña es obligatoria' ).not().isEmpty(),
  validateFields
], loginUser );

router.get( '/renew', [
  validateJWT,
  validateFields
], renewToken );

module.exports = router;
