const { request, response } = require( 'express' );
// Services
const { deleteOurServiceByIdService } = require( '../../services/our-services' );

/*
  PATH: '/api/our-services/:id'
*/
const deleteOurServiceById = async ( req = request, res = response ) => {
  const { id } = req.params;

  try {
    const { msg } = await deleteOurServiceByIdService( id );

    res.json({
      ok: true,
      msg
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.DELETE-OUR-SERVICE-BY-ID]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = deleteOurServiceById;
