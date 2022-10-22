const { request, response } = require( 'express' );
// Services

/*
  PATH: '/api/productCategory'
*/
const getProductCategories = async ( req = request, res = response ) => {
  try {

    res.json({
      ok: true,
      msg: 'getProductCategories'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-PRODUCT-CATEGORIES]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = getProductCategories;

