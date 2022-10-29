// Helpers
const { priceFormater } = require( '../../helpers/db' );
// Models
const { OurService } = require( '../../models' );

const updateOurServiceByIdService = async ( uid = '', id = '', ourServeceData = {} ) => {
  const ourServiceDataFormated = {
    ...ourServeceData,
    price: priceFormater( ourServeceData.price ),
    user: uid,
  }

  try {
    const ourServiceUpdated = await OurService.findByIdAndUpdate( id, ourServiceDataFormated, { new: true } )
      .populate( 'user', 'name' )
      .populate( 'category', 'name' );

    return {
      ourServiceUpdated
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.UPDATE-SERVICE-BY-ID]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = updateOurServiceByIdService;
