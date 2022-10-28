const { OurServicesCategory } = require( '../../../models' );

const ourServicesCategoryIdVatidation = async ( id = '' ) => {
  const ourServicesCategoryExists = await OurServicesCategory.findById( id );

  if ( !ourServicesCategoryExists || !ourServicesCategoryExists.isActive ) {
    throw new Error( 'No existe una categoría de servicios con ese ID' );
  }

  return true;
}

module.exports = ourServicesCategoryIdVatidation;
