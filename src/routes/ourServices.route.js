const { Router } = require( 'express' );
const { check } = require( 'express-validator' );
// Controllers
const {
  createOurService,
  deleteOurServiceById,
  getOurServiceById,
  getOurServices,
  updateOurServiceById
} = require( '../controllers/our-services' );
// Helpers
const { ourServiceIdVatidation, ourServicesCategoryIdVatidation } = require( '../helpers/db' );
// Middlewares
const {
  validateJWT,
  validateRole,
  validateFields
} = require( '../middlewares' );

/*
  PATH: '/api/our-services'
*/
const router = Router();

router.post( '/', [
  validateJWT,
  validateRole,
  check( 'name', 'Indique el nombre del servicio' ).not().isEmpty(),
  check( 'duration', 'Indique la duración del servicio' ).not().isEmpty(),
  check( 'price', 'Indique el precio del servicio' ).not().isEmpty(),
  check( 'category', 'Indique la categoría del servicio' ).isMongoId(),
  check( 'category' ).custom( ourServicesCategoryIdVatidation ),
  validateFields
], createOurService );

router.get( '/', [
  validateJWT,
  validateFields
], getOurServices );

router.get( '/:id', [
  validateJWT,
  check( 'id', 'Invalid Mongo ID' ).isMongoId(),
  check( 'id' ).custom( ourServiceIdVatidation ),
  validateFields
], getOurServiceById );

router.put( '/:id', [
  validateJWT,
  validateRole,
  validateFields
], updateOurServiceById );

router.delete( '/:id', [
  validateJWT,
  validateRole,
  validateFields
], deleteOurServiceById );

module.exports = router;
