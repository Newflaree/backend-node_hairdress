// Models
const { User } = require( '../../models' );

const getUserByIdService = async ( uid = '' ) => {
  try {
    const user = await User.findById( uid );

    return {
      user
    };

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-USER-BY-ID]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = getUserByIdService;
