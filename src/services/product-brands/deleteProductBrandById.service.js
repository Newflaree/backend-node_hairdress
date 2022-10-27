// Models
const { ProductBrand } = require( '../../models' );

const deleteProductBrandByIdService = async ( id = '' ) => {
  try {
    await ProductBrand.findByIdAndUpdate( id, { isActive: false } );

    return {
      msg: 'Marca eliminada con éxito'
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.DELETE-PRODUCT-BRAND-BY-ID]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = deleteProductBrandByIdService;
