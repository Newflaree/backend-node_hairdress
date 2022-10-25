const { request, response } = require( 'express' );
// Services
const { getProductBrandsService } = require( '../../services/product-brands' );

/*
  PATH: '/api/productBrands'
*/
const getProductBrands = async ( req = request, res = response ) => {
  const { limit = 5, from = 0 } = req.query;
  const query = { isActive: true };

  try {

    res.json({
      ok: true,
      msg: 'getProductBrands'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-PRODUCT-BRANDS]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = getProductBrands;

