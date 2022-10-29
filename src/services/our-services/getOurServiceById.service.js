// Models
const { OurService } = require( '../../models' );

const getOurServiceByIdService = async ( id = '' ) => {
  try {
    const ourService = await OurService.findById( id );

    return {
      ourService
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-OUR-SERVICE-BY-ID]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = getOurServiceByIdService;
