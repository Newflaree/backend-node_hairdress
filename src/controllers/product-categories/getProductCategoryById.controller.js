const { request, response } = require( 'express' );
// Services
const { getProductCategoryByIdService } = require( '../../services/product-categories' );

/*
  PATH: '/api/product-category/:id'
*/
const getProductCategoryById = async ( req = request, res = response ) => {
  const { id } = req.params;

  try {
    const { productCategory } = await getProductCategoryByIdService( id );

    res.json({
      ok: true,
      productCategory
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-PRODUCT-CATEGORY-BY-ID]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = getProductCategoryById;
