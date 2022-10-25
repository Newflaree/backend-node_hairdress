// Models
const { ProductCategory } = require( '../../models' );

const deleteProductCategoryByIdService = async ( id = '' ) => {
  try {
    const productCategoryDeleted = await ProductCategory.findByIdAndUpdate( id, { isActive: false } );

    if ( !productCategoryDeleted.isActive ) {
      return {
        ok: false,
        statusCode: 400,
        msg: 'No existe un producto con ese id'
      }
    }

    return {
      ok: true,
      statusCode: 200,
      msg: 'Categoría eliminada con éxito'
    };

  } catch ( err ) {
    console.log( `${ '[SERVICE.CREATE-PRODUCT-CATEGORY]'.red }: Error Detail - ${ err }` );
  }}

module.exports = deleteProductCategoryByIdService;
