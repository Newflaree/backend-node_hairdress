const { request, response } = require( 'express' );
// Services
const { createUserService } = require( '../../services/auth' );

/*
  POST
  PATH: '/api/auth/register'
*/
const createUser = async ( req = request, res = response ) => {
  const { name, email, password } = req.body;

  try {
    const { user, token, menu } = await createUserService( name, email, password );

    res.status( 201 ).json({
      ok: true,
      user,
      token,
      menu
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.CREATE-USER]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = createUser;
