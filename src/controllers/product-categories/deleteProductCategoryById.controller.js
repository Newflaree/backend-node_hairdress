const { request, response } = require( 'express' );
// Services
const { deleteProductCategoryByIdService } = require( '../../services/product-categories' );

/*
  PATH: '/api/product-category/:id'
*/
const deleteProductCategoryById = async ( req = request, res = response ) => {
  const { id } = req.params;
  try {

    const { msg, ok, statusCode } = await deleteProductCategoryByIdService( id );

    res.status( statusCode ).json({
      ok,
      msg
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.DELETE-PRODUCT-CATEGORY-BY-ID]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = deleteProductCategoryById;
