const { request, response } = require( 'express' );
// Services
const { setHomeProductService } = require( '../../../services/home-maintenance/home-products' );

/*
  PATH: '/api/home-products/:id'
*/
const setHomeProduct = async ( req = request, res = response ) => {
  const { id } = req.params;

  try {
    const { statusCode, ok, msg, newHomeProduct } = await setHomeProductService( id );

    res.status( statusCode ).json({
      ok,
      msg,
      newHomeProduct
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
