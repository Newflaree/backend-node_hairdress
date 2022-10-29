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
const { ourServicesCategoryIdVatidation } = require( '../helpers/db/our-services-categories' );
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
  check( 'name', 'El nombre para la categoría del servicio es obligatorio' ).not().isEmpty(),
  validateFields
], createOurServicesCategory );

router.get( '/', getOurServicesCategories );

router.get( '/:id', [
  check( 'id', 'Invalid Mongo ID' ).isMongoId(),
  check( 'id' ).custom( ourServicesCategoryIdVatidation ),
  validateFields
], getOurServicesCategoryById );

router.put( '/:id', [
  validateJWT,
  validateRole,
  check( 'id', 'Invalid Mongo ID' ).isMongoId(),
  check( 'id' ).custom( ourServicesCategoryIdVatidation ),
  check( 'name', 'El nombre para la categoría del servicio es obligatorio' ).not().isEmpty(),
  validateFields
], updateOurServicesCategoryById );

router.delete( '/:id', [
  validateJWT,
  validateRole,
  check( 'id', 'Invalid Mongo ID' ).isMongoId(),
  check( 'id' ).custom( ourServicesCategoryIdVatidation ),
  validateFields
], deleteOurServicesCategoryById );

module.exports = router;
