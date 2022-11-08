// Models
const { HomeProduct } = require( '../../../models' );

const deleteHomeProductByIdService = async ( id = '' ) => {
  try {
    await HomeProduct.findByIdAndUpdate( id, { showOnHome: false } );

    return {
      msg: 'Producto eliminado de inicio con éxito'
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.DELETE-HOME-PRODUCT-BY-ID]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = deleteHomeProductByIdService;
