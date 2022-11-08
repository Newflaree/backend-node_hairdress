// Models
const { HomeProduct } = require( '../../../models' );

const homeProductIdValidation = async ( id = '' ) => {
  const homeProductExists = await HomeProduct.findById( id );

  if ( !homeProductExists || !homeProductExists.showOnHome ) {
    throw new Error( 'No existe un producto en inicio con ese ID' );
  }

  return true;
}

module.exports = homeProductIdValidation;
