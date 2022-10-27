const { request, response } = require( 'express' );
// Services
const { deleteProductBrandByIdService } = require( '../../services/product-brands' );

/*
  PATH: '/api/productBrands/:id'
*/
const deleteProductBrandById = async ( req = request, res = response ) => {
  const { id } = req.params;

  try {
    const { msg } = await deleteProductBrandByIdService( id );

    res.json({
      ok: true,
      msg
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.DELETE-PRODUCT-BRAND-BY-ID]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = deleteProductBrandById;
