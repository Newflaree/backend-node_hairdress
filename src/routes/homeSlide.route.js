const { Router } = require( 'express' );
const { check } = require( 'express-validator' );
// Controllers
const {
  createHomeSlide,
  deleteHomeSlideById,
  getHomeSlide,
  updateHomeSlideById
} = require('../controllers/home-maintenance/home-slide');
// Helpers
const { homeSlideIdValidation } = require( '../helpers/db/home-maintenance' );
// Middlewares
const {
  validateFields,
  validateJWT,
  validateRole
} = require( '../middlewares' );

/*
  PATH: '/api/home-slide'
*/
const router = Router();

router.post( '/', [
  validateJWT,
  validateRole,
  check( 'img', 'La imágen de la portada es obligatoria' ).not().isEmpty(),
  check( 'title', 'El título de la portada es obligatorio' ).not().isEmpty(),
  check( 'desc', 'La descripción de la portada es obligatoria' ).not().isEmpty(),
  check( 'url', 'El enlace de la portada es obligatorio' ).not().isEmpty(),
  validateFields
], createHomeSlide );

router.get( '/', getHomeSlide );

router.put( '/:id', [
  validateJWT,
  validateRole,
  check( 'id', 'Invalid Mongo ID' ).isMongoId(),
  check( 'id' ).custom( homeSlideIdValidation ),
  check( 'img', 'La imágen de la portada es obligatoria' ).not().isEmpty(),
  check( 'title', 'El título de la portada es obligatorio' ).not().isEmpty(),
  check( 'desc', 'La descripción de la portada es obligatoria' ).not().isEmpty(),
  check( 'url', 'El enlace de la portada es obligatorio' ).not().isEmpty(),
  validateFields
], updateHomeSlideById );

router.delete( '/:id', [
  validateJWT,
  validateRole,
  check( 'id', 'Invalid Mongo ID' ).isMongoId(),
  check( 'id' ).custom( homeSlideIdValidation ),
  validateFields
], deleteHomeSlideById );

module.exports = router;
