const { User } = require( '../../../models' );

const emailValidation = async ( email = '' ) => {
  const emailExists = await User.findOne({ email });

  if ( emailExists ) {
    throw new Error( 'Ya existe un usuario con ese email' );
  }

  return true;
}

module.exports = emailValidation;
