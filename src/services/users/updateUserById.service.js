const bcrypt = require( 'bcryptjs' );
// Models
const { User } = require( '../../models' );

const updateUserByIdService = async ( id = '', password = '', rest = {} ) => {
  try {
    if ( password ) {
      const salt = bcrypt.genSaltSync();
      rest.password = bcrypt.hashSync( password, salt );
    }

    const user = await User.findByIdAndUpdate( id, rest, { new: true } );

    return {
      user
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.UPDATE-USER-BY-ID]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = updateUserByIdService;
