// Models
const { Product } = require( '../../models' );

const getProductByIdService = async ( id = '' ) => {
  try {
    const product = await Product.findById( id )
      .populate( 'user', 'name' )
      .populate( 'category', 'name' )
      .populate( 'brand', 'name' );

    return {
      product
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-PRODUCT-BY-ID]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = getProductByIdService;
