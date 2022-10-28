// Models
const { OurServicesCategory } = require( '../../models' );

const getOurServicesCategoryByIdService = async ( id = '' ) => {
  try {
    const ourServicesCategory = await OurServicesCategory.findById( id );

    return {
      ourServicesCategory
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-OUR-SERVICES-CATEGORY-BY-ID]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = getOurServicesCategoryByIdService;
