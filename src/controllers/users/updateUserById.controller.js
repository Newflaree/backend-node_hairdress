const { request, response } = require("express");

/*
  PATH: '/api/users/:id'
*/
const updateUserById = async ( req = request, res = response ) => {
  try {

    res.json({
      ok: true,
      msg: 'updateUserById'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.UPDATE-USER-BY-ID]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = updateUserById;
