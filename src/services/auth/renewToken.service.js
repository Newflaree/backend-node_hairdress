// Helpers
const { generateJWT } = require( '../../helpers/jwt' );
const {getMenuFront} = require('../../helpers/menu-front');
// Models
const { User } = require( '../../models' );

const renewTokenService = async ( uid = '' ) => {
  try {
    const [ user, token ] = await Promise.all([
      User.findById( uid ),
      generateJWT( uid )
    ]);

    // TODO: Set menu for frontend
    const menu = getMenuFront( user.role );

    return {
      user,
      token,
      menu
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.RENEW-TOKEN]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = renewTokenService;
