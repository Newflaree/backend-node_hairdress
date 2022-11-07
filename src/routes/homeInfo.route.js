const { Router } = require( 'express' );
const { check } = require( 'express-validator' );
// Controllers
const {
  createHomeInfo,
  getHomeInfo,
  updateHomeInfo
} = require('../controllers/home-maintenance/home-info');
// Helpers
const { homeInfoIdValidation } = require( '../helpers/db/home-maintenance' );
// Middlewares
const {
  validateFields,
  validateJWT,
  validateRole
} = require( '../middlewares' );

/*
  PATH: '/api/home-info'
*/
const router = Router();

router.post( '/', [
  validateJWT,
  validateRole,
  check( 'vision', 'La visión es obligatoria' ).not().isEmpty(),
  check( 'mission', 'La misión es obligatoria' ).not().isEmpty(),
  check( 'about', 'Sobre mi es obligatoria' ).not().isEmpty(),
  validateFields
], createHomeInfo );

router.get( '/', getHomeInfo );

router.put( '/:id', [
  validateJWT,
  validateRole,
  check( 'id', 'Invalid Mongo ID' ).isMongoId(),
  check( 'id' ).custom( homeInfoIdValidation ),
  check( 'vision', 'La visión es obligatoria' ).not().isEmpty(),
  check( 'mission', 'La misión es obligatoria' ).not().isEmpty(),
  check( 'about', 'Sobre mi es obligatoria' ).not().isEmpty(),
  validateFields
], updateHomeInfo );

module.exports = router;
