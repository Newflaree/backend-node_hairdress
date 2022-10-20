const mongoose = require( 'mongoose' );

const dbConnection = async () => {
  try {
    await mongoose.connect( process.env.MONGO_CNN  || '' );
    console.log( `${ '[DB.CONFIG]'.green }: Database ${ 'ONLINE'.green }` );

  } catch ( err ) {
    console.log( `${ '[DB.CONFIG]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = dbConnection;
