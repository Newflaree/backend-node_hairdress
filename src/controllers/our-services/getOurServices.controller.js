const { request, response } = require( 'express' );
// Services
const { getOurServicesService } = require( '../../services/our-services' );

/*
  PATH: '/api/our-services'
*/
const getOurServices = async ( req = request, res = response ) => {
  const { limit = 5, from = 0 } = req.query;
  const query = { isActive: true };

  try {

    const { total, ourServices } = await getOurServicesService( query, from, limit );

    res.json({
      ok: true,
      total,
      ourServices
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

