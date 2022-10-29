const { request, response } = require( 'express' );
// Services
const { updateOurServiceByIdService } = require( '../../services/our-services' );

/*
  PATH: '/api/our-services/:id'
*/
const updateOurServiceById = async ( req = request, res = response ) => {
  const { _id: uid } = req.user;
  const { id } = req.params;
  const { _id, isActive, ...ourServiceData } = req.body;

  try {
    const { ourServiceUpdated } = await updateOurServiceByIdService( uid, id, ourServiceData );

    res.json({
      ok: true,
      ourServiceUpdated
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.UPDATE-OUR-SERVICE-BY-ID]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = updateOurServiceById;
