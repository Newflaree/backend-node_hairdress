const { request, response } = require( 'express' );
// Services
const { createProductService } = require( '../../services/products' );

/*
  PATH: '/api/products'
*/
const createProduct = async ( req = request, res = response ) => {
  const productData = req.body;
  const { _id: uid } = req.user;


  try {
    const { productCreated } = await createProductService( uid, productData );

    res.json({
      ok: true,
      productCreated
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.CREATE-PRODUCT]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = createProduct;
