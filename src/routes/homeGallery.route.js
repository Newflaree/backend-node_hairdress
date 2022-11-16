const { Router } = require( 'express' );
const { check } = require( 'express-validator' );
// Controllers
const {
  createHomeGallery,
  getHomeGallery,
  updateHomeGalleryById,
  deleteHomeGalleryById
} = require('../controllers/home-maintenance/home-gallery');
// Helpers
const { homeGalleryIdValidation } = require( '../helpers/db/home-maintenance' );
// Middlewares
const {
  validateFields,
  validateJWT,
  validateRole
} = require( '../middlewares' );

/*
  PATH: '/api/home-gallery'
*/
const router = Router();

router.post( '/', [
  validateJWT,
  validateRole,
  check( 'img', 'La imágen es obligatoria' ).not().isEmpty(),
  validateFields
], createHomeGallery );

router.get( '/', getHomeGallery );

router.put( '/:id', [
  validateJWT,
  validateRole,
  check( 'id', 'Invalid Mongo ID' ).isMongoId(),
  check( 'id' ).custom( homeGalleryIdValidation ),
  check( 'img', 'La imágen es obligatoria' ).not().isEmpty(),
  validateFields
], updateHomeGalleryById );

router.delete( '/:id', [
  validateJWT,
  validateRole,
  check( 'id', 'Invalid Mongo ID' ).isMongoId(),
  check( 'id' ).custom( homeGalleryIdValidation ),
  validateFields
], deleteHomeGalleryById );

module.exports = router;
