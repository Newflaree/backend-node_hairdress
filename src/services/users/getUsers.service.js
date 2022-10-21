// Models
const { User } = require( '../../models' );

const getUsersService = async ( from = 0, limit = 0 ) => {
  const condition = { isActive: true };

  try {
    const [ total, users ] = await Promise.all([
      User.countDocuments( condition ),
      User.find( condition )
        .skip( Number( from ) )
        .limit( Number( limit ) )
    ])

    return {
      total,
      users
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-USERS]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = getUsersService;
