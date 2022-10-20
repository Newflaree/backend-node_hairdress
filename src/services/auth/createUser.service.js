// Models
const {generateJWT} = require('../../helpers/jwt');
const { User } = require( '../../models' );


const createUserService = async ( name, email, password ) => {
  try {
    const user = new User({ name, email, password });

    // TODO: Encrypt password
    //
    // Save to DB
    await user.save();

    // Generate JWT
    const token = await generateJWT( user.uid );


    return { user, token };

  } catch ( err ) {
    console.log( `${ '[SERVICE.CREATE-USER]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = createUserService;
