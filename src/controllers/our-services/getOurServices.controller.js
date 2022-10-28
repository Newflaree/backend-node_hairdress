const { request, response } = require( 'express' );
// Services
const { getOurServicesService } = require( '../../services/products' );

/*
  PATH: '/api/our-services'
*/
const getOurServices = async ( req = request, res = response ) => {
  const { limit = 5, from = 0 } = req.query;
  const query = { isActive: true };

  try {

    res.json({
      ok: true,
      msg: 'getOurServices'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-OUR-SERVICES]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = getOurServices;

