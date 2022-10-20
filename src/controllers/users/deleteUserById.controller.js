const { request, response } = require("express");

/*
  PATH: '/api/users/:id'
*/
const deleteUserById = async ( req = request, res = response ) => {
  try {

    res.json({
      ok: true,
      msg: 'deleteUserById'
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
