const { request, response } = require( 'express' );
// Services

/*
  PATH: '/api/home-products/:id'
*/
const deleteHomeProductById = async ( req = request, res = response ) => {
  try {

    res.json({
      ok: true,
      msg: 'deleteHomeProductById'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.DELETE-HOME-PRODUCT-BY-ID]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = deleteHomeProductById;
