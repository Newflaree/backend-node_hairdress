const { request, response } = require( 'express' );
// Services
const { updateProductByIdService } = require( '../../services/products' );

/*
  PATH: '/api/products/:id'
*/
const updateProductById = async ( req = request, res = response ) => {
  const { _id: uid } = req.user;
  const { id } = req.params;
  const { _id, isActive, ...productData } = req.body;

  try {
    const { productUpdated } = await updateProductByIdService( uid, id, productData );

    res.json({
      ok: true,
      productUpdated
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.UPDATE-PRODUCT-BY-ID]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = updateProductById;
