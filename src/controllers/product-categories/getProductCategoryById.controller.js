const { request, response } = require( 'express' );
// Services

/*
  PATH: '/api/productCategory/:id'
*/
const getProductCategoryById = async ( req = request, res = response ) => {
  try {

    res.json({
      ok: true,
      msg: 'getProductCategoryById'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-PRODUCT-CATEGORY-BY-ID]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = getProductCategoryById;
