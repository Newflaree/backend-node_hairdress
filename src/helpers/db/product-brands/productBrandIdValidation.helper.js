// Models
const { ProductBrand } = require( '../../../models' );

const productBrandIdValidation = async ( id = '' ) => {
  const productBrandExists = await ProductBrand.findById( id );

  if ( !productBrandExists || !productBrandExists.isActive ) {
    throw new Error( 'There is no product brand with that id' );
  }

  return true;
}

module.exports = productBrandIdValidation;
