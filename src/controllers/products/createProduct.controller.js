const { request, response } = require( 'express' );
// Services
const { createProductService } = require( '../../services/products' );

/*
  PATH: '/api/products'
*/
const createProduct = async ( req = request, res = response ) => {

  try {

    res.json({
      ok: true,
      msg: 'createProduct'
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
