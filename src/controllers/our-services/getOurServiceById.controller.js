const { request, response } = require( 'express' );
// Services
const { getOurServiceByIdService } = require( '../../services/our-services' );

/*
  PATH: '/api/our-services/:id'
*/
const getOurServiceById = async ( req = request, res = response ) => {
  const { id } = req.params;

  try {
    const { ourService } = await getOurServiceByIdService( id );

    res.json({
      ok: true,
      ourService
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-OUR-SERVICE-BY-ID]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = getOurServiceById;
