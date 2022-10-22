const { request, response } = require( 'express' );
// Services

/*
  PATH: '/api/productCategory/:id'
*/
const deleteProductCategoryById = async ( req = request, res = response ) => {
  try {

    res.json({
      ok: true,
      msg: 'deleteProductCategoryById'
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
