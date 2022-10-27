// Models
const { Product } = require( '../../models' );

const getProductByIdService = async ( id = '' ) => {
  try {
    const product = await Product.findById( id );

    return {
      product
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-PRODUCT-BY-ID]'.red }: Error Detail - ${ err }` );
  }}

module.exports = getProductByIdService;
