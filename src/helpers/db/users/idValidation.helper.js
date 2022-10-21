const { User } = require( '../../../models' );

const idValidation = async ( id = '' ) => {
  const userExists = await User.findById( id );

  if ( !userExists || !userExists.isActive ) {
    throw new Error( 'No existe un usuario con ese ID' )
  }

  return true;
}

module.exports = idValidation;
