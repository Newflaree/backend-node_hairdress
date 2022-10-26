const bcrypt = require( 'bcryptjs' );
// Helpers
const { generateJWT } = require('../../helpers/jwt');
const { getMenuFront } = require( '../../helpers/menu-front' );
// Models
const { User } = require( '../../models' );

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
    const token = await generateJWT( user.id );

    // Set manu for frontend
    const menu = getMenuFront( user.role );

    return {
      user,
      token,
      menu
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.LOGIN-USER]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = loginUserService;
