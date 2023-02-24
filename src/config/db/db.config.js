const mongoose = require( 'mongoose' );

const dbConnection = async () => {
  try {
    await mongoose.connect( process.env.MONGO_CNN  || '' );
    console.log( `${ '[CONFIG.DATABASE]'.green }: Database ${ 'ONLINE'.green }` );

  } catch ( err ) {
    console.log( `${ '[CONFIG.DATABASE]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = dbConnection;
