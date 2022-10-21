const { request, response } = require("express");
// Services
const { loginUserService } = require("../../services/auth");

/*
  PATH: '/api/auth/login'
*/
const loginUser = async ( req = request, res = response ) => {
  const { email, password } = req.body;

  try {
    const {
      user,
      token,
      statusCode,
      ok,
      msg
    } = await loginUserService( email, password );

    if ( statusCode === 401 ) {
      return res.status( statusCode ).json({
        ok,
        msg
      });
    }

    res.json({
      ok: true,
      user,
      token
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
