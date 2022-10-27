// Models
const { Product } = require( '../../../models' );

const productIdValidation = async ( id = '' ) => {
  const productExists = await Product.findById( id );

  if ( !productExists || !productExists.isActive ) {
    throw new Error( 'No existe ningún producto con ese ID' )
  } 

  return true;
}

module.exports = productIdValidation;
