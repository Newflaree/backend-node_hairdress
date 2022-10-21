const { request, response } = require( 'express' );
// Services
const {renewTokenService} = require( '../../services/auth' );

/*
  PATH: '/api/auth/login'
*/
const renewToken = async ( req = request, res = response ) => {
  const { _id } = req.user;

  try {
    const { user, token } = await renewTokenService( _id );

    res.json({
      ok: true,
      user,
      token
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.RENEW-TOKEN]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = renewToken;
