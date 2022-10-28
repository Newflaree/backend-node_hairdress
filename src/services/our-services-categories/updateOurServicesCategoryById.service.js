// Models
const { OurServicesCategory } = require( '../../models' );

const updateOurServicesCategoryByIdService = async ( uid = '', id = '', data = {} ) => {
  try {

  } catch ( err ) {
    console.log( `${ '[SERVICE.UPDATE-OUR-SERVICES-CATEGORY-BY-ID]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = updateOurServicesCategoryByIdService;
