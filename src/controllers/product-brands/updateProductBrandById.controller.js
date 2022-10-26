const { request, response } = require( 'express' );
// Services
const { updateProductBrandByIdService } = require( '../../services/product-brands' );

/*
  PATH: '/api/productBrands/:id'
*/
const updateProductBrandById = async ( req = request, res = response ) => {
  const { _id: uid } = req.user;
  const { id } = req.params;
  const { _id, isActive, ...data } = req.body;

  try {

    const { productBrandUpdated } = await updateProductBrandByIdService( uid, id, data );

    res.json({
      ok: true,
      productBrandUpdated
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.UPDATE-PRODUCT-BRAND-BY-ID]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = updateProductBrandById;
