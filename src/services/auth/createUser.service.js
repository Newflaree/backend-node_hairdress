const { request, response } = require("express");
// Models
const { User } = require("../../models");


const createUserService = async ( name, email, password ) => {

  try {
    const user = new User({ name, email, password });

    // TODO: Encrypt password
    // TODO: Save to DB
    await user.save();
    // TODO: Generate JWT

    return { user };

  } catch ( err ) {
    console.log( `${ '[SERVICE.CREATE-USER]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = createUserService;
