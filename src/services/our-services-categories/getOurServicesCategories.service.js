// Models
const { OurServicesCategory } = require( '../../models' );

const getOurServicesCategoriesService = async ( query = {}, from = 0, limit = 0 ) => {
  try {
    const [ total, ourServicesCategories ] = await Promise.all([
      OurServicesCategory.countDocuments( query ),
      OurServicesCategory.find( query )
        .populate( 'user', 'name' )
        .skip( Number( from ) )
        .limit( Number( limit ) )
    ]);

    return {
      total,
      ourServicesCategories
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-OUR-SERVICES-CATEGORIES]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = getOurServicesCategoriesService;
