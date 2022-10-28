const { request, response } = require( 'express' );
// Services
const { createOurServiceService } = require( '../../services/our-services' );

/*
  PATH: '/api/our-services'
*/
const createOurService = async ( req = request, res = response ) => {
  const ourSericeData = req.body;
  const { _id: uid } = req.user;

  try {
    const { ourServiceCreated } = await createOurServiceService( uid, ourSericeData );

    res.json({
      ok: true,
      ourServiceCreated
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.CREATE-OUR-SERVICE]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = createOurService;
