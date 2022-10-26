const bcrypt = require( 'bcryptjs' );
// Helpers
const { generateJWT } = require( '../../helpers/jwt' );
const { getMenuFront } = require( '../../helpers/menu-front' );
// Models
const { User } = require( '../../models' );

const createUserService = async ( name = '', email = '', password = '' ) => {
  try {
    const user = new User({ name, email, password });

    // Encrypt password
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync( password, salt );

    // Save to DB
    await user.save();

    // Generate JWT
    const token = await generateJWT( user.id );

    // TODO: Get manu for frontend
    const menu = getMenuFront( user.role );

    return {
      user,
      token,
      menu
    };

  } catch ( err ) {
    console.log( `${ '[SERVICE.CREATE-USER]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = createUserService;
