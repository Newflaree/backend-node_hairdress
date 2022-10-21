const { request, response } = require( 'express' );
// Services
const { deleteUserByIdService } = require( '../../services/users' );

/*
  PATH: '/api/users/:id'
*/
const deleteUserById = async ( req = request, res = response ) => {
  const { id } = req.params;

  try {
    await deleteUserByIdService( id );

    res.json({
      ok: true,
      msg: 'Usuario eliminado con éxito'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.DELETE-USER-BY-ID]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = deleteUserById;
