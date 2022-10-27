const { request, response } = require( 'express' );
// Services
const { getProductCategoriesService } = require( '../../services/product-categories' );

/*
  PATH: '/api/product-category'
*/
const getProductCategories = async ( req = request, res = response ) => {
  const { limit = 5, from = 0 } = req.query;
  const query = { isActive: true };

  try {
    const { total, productCategories } = await getProductCategoriesService( query, from, limit );

    res.json({
      ok: true,
      total,
      productCategories
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-PRODUCT-CATEGORIES]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = getProductCategories;

