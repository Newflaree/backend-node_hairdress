const { request, response } = require("express");

/*
  PATH: '/api/users'
*/
const getUsers = async ( req = request, res = response ) => {
  try {

    res.json({
      ok: true,
      msg: 'getUsers'
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
