const { request, response } = require( 'express' );
// Services
const { updateProductCategoryByIdService } = require( '../../services/product-categories' );

/*
  PATH: '/api/product-category/:id'
*/
const updateProductCategoryById = async ( req = request, res = response ) => {
  const { _id: uid } = req.user;
  const { id } = req.params;
  const { _id, isActive, ...data } = req.body;

  try {
    const { productCategoryUpdated } =await updateProductCategoryByIdService( uid, id, data );

    res.json({
      ok: true,
      productCategoryUpdated
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.UPDATE-PRODUCT-CATEGORY-BY-ID]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = updateProductCategoryById;
