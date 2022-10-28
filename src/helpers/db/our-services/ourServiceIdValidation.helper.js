const { OurService } = require( '../../../models' );

const ourServiceIdVatidation = async ( id = '' ) => {
  const ourServiceExists = await OurService.findById( id );

  if ( !ourServiceExists || !ourServiceExists.isActive ) {
    throw new Error( 'No existe un servicio con ese ID' );
  }

  return true;
}

module.exports = ourServiceIdVatidation;
