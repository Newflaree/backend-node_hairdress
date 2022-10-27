const { ProductBrand } = require( '../../../models' );

const productBrandIdValidation = async ( id = '' ) => {
  const productBrandExists = await ProductBrand.findById( id );

  if ( !productBrandExists ) {
    throw new Error( 'There is no product brand with that id' );
  }

  return true;
}

module.exports = productBrandIdValidation;
