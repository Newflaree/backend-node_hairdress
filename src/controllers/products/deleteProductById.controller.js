const { request, response } = require( 'express' );
// Services
const { deleteProductByIdService } = require( '../../services/products' );

/*
  PATH: '/api/products/:id'
*/
const deleteProductById = async ( req = request, res = response ) => {
  const { id } = req.params;

  try {
    const { msg } = await deleteProductByIdService( id );

    res.json({
      ok: true,
      msg
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.DELETE-PRODUCT-BY-ID]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = deleteProductById;
