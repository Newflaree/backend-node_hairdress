const { Router } = require( 'express' );
const { check } = require( 'express-validator' );
// Controllers
const {
  createOurServicesCategory,
  deleteOurServicesCategoryById,
  getOurServicesCategories,
  getOurServicesCategoryById,
  updateOurServicesCategoryById
} = require( '../controllers/our-services-categories' );
// Helpers
// Middlewares
const {
  validateJWT,
  validateRole,
  validateFields
} = require( '../middlewares' );

/*
  PATH: '/api/our-services-categories'
*/
const router = Router();

router.post( '/', [
  validateJWT,
  validateRole,
  validateFields
], createOurServicesCategory );

router.get( '/', [
  validateJWT,
  validateFields
], getOurServicesCategories );

router.get( '/:id', [
  validateJWT,
  validateFields
], getOurServicesCategoryById );

router.put( '/:id', [
  validateJWT,
  validateRole,
  validateFields
], updateOurServicesCategoryById );

router.delete( '/:id', [
  validateJWT,
  validateRole,
  validateFields
], deleteOurServicesCategoryById );

module.exports = router;
