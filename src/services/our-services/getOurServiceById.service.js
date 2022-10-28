// Models
const { OurService } = require( '../../models' );

const getOurServiceByIdService = async ( id = '' ) => {
  try {

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-OUR-SERVICE-BY-ID]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = getOurServiceByIdService;
