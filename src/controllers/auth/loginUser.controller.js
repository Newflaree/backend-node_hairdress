const { request, response } = require("express");

/*
  PATH: '/api/auth/login'
*/
const loginUser = async ( req = request, res = response ) => {
  try {

    res.json({
      ok: true,
      msg: 'loginUser'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.LOGIN-USER]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = loginUser;
