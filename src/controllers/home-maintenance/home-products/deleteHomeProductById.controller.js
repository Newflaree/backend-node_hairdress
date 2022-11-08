const { request, response } = require( 'express' );
const {deleteHomeProductByIdService} = require('../../../services/home-maintenance/home-products');
// Services

/*
  PATH: '/api/home-products/:id'
*/
const deleteHomeProductById = async ( req = request, res = response ) => {
  const { id } = req.params;
  try {
    const { msg } = await deleteHomeProductByIdService( id );

    res.json({
      ok: true,
      msg
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
