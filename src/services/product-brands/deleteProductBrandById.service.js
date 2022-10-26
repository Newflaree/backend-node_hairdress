// Models
const { ProductBrand } = require( '../../models' );

const deleteProductBrandByIdService = async ( id = '' ) => {
  try {
    const productBrandDeleted = await ProductBrand.findByIdAndUpdate( id, { isActive: false } );

    if ( !productBrandDeleted.isActive ) {
      return {
        ok: false,
        statusCode: 400,
        msg: 'No existe una marca con ese ID'
      }
    }

    return {
      ok: true,
      statusCode: 200,
      msg: 'Marca eliminada con éxito'
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.DELETE-PRODUCT-BRAND-BY-ID]'.red }: Error Detail - ${ err }` );
  }}

module.exports = deleteProductBrandByIdService;
