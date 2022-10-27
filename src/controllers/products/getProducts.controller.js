const { request, response } = require( 'express' );
// Services
const { getProductsService } = require( '../../services/products' );

/*
  PATH: '/api/products'
*/
const getProducts = async ( req = request, res = response ) => {
  const { limit = 5, from = 0 } = req.query;
  const query = { isActive: true };

  try {
    const { total, products } = await getProductsService( query, from, limit );

    res.json({
      ok: true,
      total,
      products
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-PRODUCTS]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = getProducts;

