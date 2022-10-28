// Models
const { OurServicesCategory } = require( '../../models' );

const deleteOurServicesCategoryByIdService = async ( id = '' ) => {
  try {

  } catch ( err ) {
    console.log( `${ '[SERVICE.DELETE-OUR-SERVICES-CATEGORY-BY-ID]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = deleteOurServicesCategoryByIdService;
