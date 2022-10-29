// Models
const { OurService } = require( '../../models' );

const deleteOurServiceByIdService = async ( id = '' ) => {
  try {
    await OurService.findByIdAndUpdate( id, { isActive: false } );

    return {
      msg: 'Servicio eliminado con éxito'
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.DELETE-OUR-SERVICE-BY-ID]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = deleteOurServiceByIdService;
