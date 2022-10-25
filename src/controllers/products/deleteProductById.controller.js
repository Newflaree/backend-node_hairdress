const { request, response } = require( 'express' );
const {deleteProductByIdService} = require('../../services/products');
// Services

deleteProductByIdService
/*
  PATH: '/api/products/:id'
*/
const deleteProductById = async ( req = request, res = response ) => {
  const { id } = req.params;

  try {


    res.json({
      ok: true,
      msg: 'deleteProductById'
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
