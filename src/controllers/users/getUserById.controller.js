const { request, response } = require("express");

/*
  PATH: '/api/users/:id'
*/
const getUserById = async ( req = request, res = response ) => {
  try {

    res.json({
      ok: true,
      msg: 'getUserById'
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
