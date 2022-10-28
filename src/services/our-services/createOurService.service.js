// Helpers
const { priceFormater } = require( '../../helpers/db' );
// Models
const { OurService } = require( '../../models' );

const createOurServiceService = async ( uid = '', ourSericeData = {} ) => {
  const formatedData = {
    ...ourSericeData,
    price: priceFormater( ourSericeData.price ),
    user: uid
  };

  try {
    const ourServiceCreated = new OurService( formatedData );
    await ourServiceCreated.save();

    return {
      ourServiceCreated
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.CREATE-OUR-SERVICE]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = createOurServiceService;
