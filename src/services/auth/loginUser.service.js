const bcrypt = require( 'bcryptjs' );
// Helpers
const { generateJWT } = require('../../helpers/jwt');
// Models
const { User } = require("../../models");

/*
  PATH: '/api/auth/login'
*/
const loginUserService = async ( email = '', password = '' ) => {
  try {
    const user = await User.findOne({ email });

    // Check if email exists or is active
    if ( !user || !user.isActive ) {
      return {
        statusCode: 401,
        ok: false,
        msg: 'El correo o la contraseña son incorrectas'
      }
    }

    // Check if password is valid
    const validPass = bcrypt.compareSync( password, user.password );
    if ( !validPass ) {
      return {
        statusCode: 401,
        ok: false,
        msg: 'El correo o la contraseña son incorrectas'
      }
    }

    // Generate JWT
    const token = await generateJWT( user.uid );

    // TODO: Set manu for frontend

    return {
      user,
      token
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.LOGIN-USER]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = loginUserService;

