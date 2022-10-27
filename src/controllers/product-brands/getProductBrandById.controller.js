const { request, response } = require( 'express' );
// Services
const { getProductBrandByIdService } = require( '../../services/product-brands' );

/*
  PATH: '/api/product-brands/:id'
*/
const getProductBrandById = async ( req = request, res = response ) => {
  const { id } = req.params;

  try {
    const { productBrand } = await getProductBrandByIdService( id );

    res.json({
      ok: true,
      productBrand
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
