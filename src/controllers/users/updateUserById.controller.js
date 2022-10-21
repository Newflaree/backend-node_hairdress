const { request, response } = require( 'express' );
// Services
const { updateUserByIdService } = require( '../../services/users' );

/*
  PATH: '/api/users/:id'
*/
const updateUserById = async ( req = request, res = response ) => {
  const { id } = req.params;
  const { _id, email, password, status, ...rest } = req.body;

  try {
    const { user } = await updateUserByIdService( id, password, rest );

    res.json({
      ok: true,
      user
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.UPDATE-USER-BY-ID]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = updateUserById;
