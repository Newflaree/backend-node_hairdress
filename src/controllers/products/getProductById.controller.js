const { request, response } = require( 'express' );
// Services
const { getProductByIdService } = require( '../../services/products' );

/*
  PATH: '/api/products/:id'
*/
const getProductById = async ( req = request, res = response ) => {
  const { id } = req.params;

  try {
    const { product } = await getProductByIdService( id );

    res.json({
      ok: true,
      product
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-PRODUCT-BY-ID]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = getProductById;
