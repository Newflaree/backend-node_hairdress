const { request, response } = require("express");

/*
  PATH: '/api/auth/register'
*/
const createUser = async ( req = request, res = response ) => {
  try {

    res.json({
      ok: true,
      msg: 'createUser'
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
