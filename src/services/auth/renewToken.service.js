// Helpers
const { generateJWT } = require( '../../helpers/jwt' );
// Models
const { User } = require( '../../models' );

const renewTokenService = async ( uid = '' ) => {
  try {
    const [ user, token ] = await Promise.all([
      User.findById( uid ),
      generateJWT( uid )
    ]);

    // TODO: Set menu for frontend

    return {
      user,
      token
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.RENEW-TOKEN]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = renewTokenService;
