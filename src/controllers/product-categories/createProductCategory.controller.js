const { request, response } = require( 'express' );
// Services

/*
  PATH: '/api/productCategory'
*/
const createProductCategory = async ( req = request, res = response ) => {
  try {

    res.json({
      ok: true,
      msg: 'createProductCategory'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.CREATE-PRODUCT-CATEGORY]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = createProductCategory;
