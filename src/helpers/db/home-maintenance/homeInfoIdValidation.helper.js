const { HomeInfo } = require( '../../../models' );

const homeInfoIdValidation = async ( id = '' ) => {
  const homeInfoExists = await HomeInfo.findById( id );

  if ( !homeInfoExists ) {
    throw new Error( 'No existe información de la página con ese ID' );
  }

  return true;
}

module.exports = homeInfoIdValidation;

