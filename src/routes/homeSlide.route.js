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
  validateFields
], createHomeSlide );

router.get( '/', getHomeSlide );

router.put( '/:id', [
  validateJWT,
  validateRole,
  validateFields
], updateHomeSlideById );

router.delete( '/:id', [
  validateJWT,
  validateRole,
  validateFields
], deleteHomeSlideById );

module.exports = router;
