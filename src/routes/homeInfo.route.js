const { Router } = require( 'express' );
const { check } = require( 'express-validator' );
// Controllers
const {
  createHomeInfo,
  getHomeInfo,
  updateHomeInfo
} = require('../controllers/home-maintenance/home-info');
// Helpers
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
  validateFields
], createHomeInfo );

router.get( '/', getHomeInfo );

router.put( '/:id', [
  validateJWT,
  validateRole,
  validateFields
], updateHomeInfo );

module.exports = router;
