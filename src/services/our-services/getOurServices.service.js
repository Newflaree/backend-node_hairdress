// Models
const { OurService } = require( '../../models' );

const getOurServicesService = async ( query = {}, from = 0, limit = 0 ) => {
  try {
    const [ total, ourServices ] = await Promise.all([
      OurService.countDocuments( query ),
      OurService.find( query )
        .populate( 'user', 'name' )
        .skip( Number( from ) )
        .limit( Number( limit ) )
    ]);

    return {
      total,
      ourServices
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-OUR-SERVICES]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = getOurServicesService;
