const { request, response } = require("express");

/*
  PATH: '/api/auth/login'
*/
const renewToken = async ( req = request, res = response ) => {
  try {

    res.json({
      ok: true,
      msg: 'renewToken'
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
