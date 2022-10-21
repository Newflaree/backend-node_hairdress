const { request, response } = require( 'express' );
// Services
const { getUserByIdService } = require( '../../services/users' );

/*
  PATH: '/api/users/:id'
*/
const getUserById = async ( req = request, res = response ) => {
  const { id } = req.params;

  try {
    const { user } = await getUserByIdService( id );

    res.json({
      ok: true,
      user
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-USER-BY-ID]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = getUserById;
