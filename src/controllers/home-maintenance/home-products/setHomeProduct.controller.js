const { request, response } = require( 'express' );
// Services

/*
  PATH: '/api/home-products/:id'
*/
const setHomeProduct = async ( req = request, res = response ) => {
  try {

    res.json({
      ok: true,
      msg: 'setHomeProduct'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.SET-HOME-PRODUCT]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = setHomeProduct;
