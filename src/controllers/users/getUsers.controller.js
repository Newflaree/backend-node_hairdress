const { request, response } = require( 'express' );
// Services
const { getUsersService } = require( '../../services/users' );

/*
  PATH: '/api/users'
*/
const getUsers = async ( req = request, res = response ) => {
  const { from = 0, limit = 5 } = req.query;

  try {
    const { total, users } = await getUsersService( from, limit );

    res.json({
      ok: true,
      total,
      users
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-USERS]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = getUsers;
