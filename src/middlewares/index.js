const validateFields = require( './validateFields.middleware' ); 
const validateJWT = require( './validateJwt.middleware' ); 

module.exports = {
  validateJWT,
  validateFields
}

