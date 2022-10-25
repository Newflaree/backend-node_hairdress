const { request, response } = require( 'express' );
// Services

/*
  PATH: '/api/products/:id'
*/
const getProductById = async ( req = request, res = response ) => {
  const { id } = req.params;

  try {

    res.json({
      ok: true,
      msg: 'getProductById'
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
