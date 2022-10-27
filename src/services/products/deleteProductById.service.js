// Models
const { Product } = require( '../../models' );

const deleteProductByIdService = async ( id = '' ) => {
  try {
    await Product.findByIdAndUpdate( id, { isActive: false } );

    return {
      msg: 'Producto eliminado con éxito'
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.DELETE-PRODUCT-BY-ID]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = deleteProductByIdService;
