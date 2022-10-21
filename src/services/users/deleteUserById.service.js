// Models
const { User } = require( '../../models' );

const deleteUserByIdService = async ( uid = '' ) => {
  try {
    await User.findByIdAndDelete( uid );

  } catch ( err ) {
    console.log( `${ '[SERVICE.DELETE-USER-BY-ID]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = deleteUserByIdService;
