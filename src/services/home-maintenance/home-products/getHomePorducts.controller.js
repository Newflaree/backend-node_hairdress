const { request, response } = require( 'express' );
// Services

/*
  PATH: '/api/home-products'
*/
const getHomeProducts = async ( req = request, res = response ) => {
  try {

    res.json({
      ok: true,
      msg: 'getHomeProducts'
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
