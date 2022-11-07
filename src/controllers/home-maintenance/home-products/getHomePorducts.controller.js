const { request, response } = require( 'express' );
const {getHomeProductsService} = require('../../../services/home-maintenance/home-products');
// Services

/*
  PATH: '/api/home-products'
*/
const getHomeProducts = async ( req = request, res = response ) => {
  try {
    const { total, homeProducts } = await getHomeProductsService();

    res.json({
      ok: true,
      total,
      homeProducts
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-HOME-PRODUCTS]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = getHomeProducts;
