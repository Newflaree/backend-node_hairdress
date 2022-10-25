const { request, response } = require( 'express' );
// Services

/*
  PATH: '/api/productBrands'
*/
const createProductBrand = async ( req = request, res = response ) => {

  try {

    res.json({
      ok: true,
      msg: 'createProductBrand'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.CREATE-PRODUCT-BRAND]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = createProductBrand;
