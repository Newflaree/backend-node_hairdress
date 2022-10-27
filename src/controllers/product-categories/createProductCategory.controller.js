const { request, response } = require( 'express' );
// Services
const { createProductCategoryService } = require( '../../services/product-categories' );

/*
  PATH: '/api/product-category'
*/
const createProductCategory = async ( req = request, res = response ) => {
  const name = req.body.name;
  const { _id } = req.user;

  try {
    const { productCategory } = await createProductCategoryService( name, _id );

    res.json({
      ok: true,
      productCategory
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.CREATE-PRODUCT-CATEGORY]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = createProductCategory;
