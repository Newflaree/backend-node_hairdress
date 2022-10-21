const validateFields = require( './validateFields.middleware' ); 
const validateJWT = require( './validateJwt.middleware' ); 
const validateRole = require( './validateRole.middleware' );

module.exports = {
  validateJWT,
  validateFields,
  validateRole
}

