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
  validateFields
], createOurService );

router.get( '/', [
  validateJWT,
  validateFields
], getOurServices );

router.get( '/:id', [
  validateJWT,
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
