const { request, response } = require( 'express' );
// Services
const { getProductBrandByIdService } = require( '../../services/product-brands' );

/*
  PATH: '/api/productBrands/:id'
*/
const getProductBrandById = async ( req = request, res = response ) => {
  const { id } = req.params;

  try {

    res.json({
      ok: true,
      msg: 'getProductBrandById'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-PRODUCT-BRAND-BY-ID]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = getProductBrandById;
