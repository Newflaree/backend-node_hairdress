// Models
const { User } = require( '../../models' );

const deleteUserByIdService = async ( uid = '' ) => {
  // TODO: Add uid to old user. In this case, if inset the same email to future, It will not exist and will be created correctly.
  try {
    await User.findByIdAndDelete( uid );

  } catch ( err ) {
    console.log( `${ '[SERVICE.DELETE-USER-BY-ID]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = deleteUserByIdService;
