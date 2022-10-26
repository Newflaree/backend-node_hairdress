const { request, response } = require( 'express' );
// Services
const { createProductBrandService } = require( '../../services/product-brands' );

/*
  PATH: '/api/productBrands'
*/
const createProductBrand = async ( req = request, res = response ) => {
  const name = req.body.name;
  const { _id } = req.user;

  try {
    const { productBrand } = await createProductBrandService( name, _id );

    res.json({
      ok: true,
      productBrand
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.CREATE-PRODUCT-BRAND]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = createProductBrand;
