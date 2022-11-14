// Models
const { HomeSlide } = require( '../../../models' );

const deleteHomeSlideByIdService = async ( id = '' ) => {
  try {
    await HomeSlide.findByIdAndUpdate( id, { showOnHome: false } );

    return {
      msg: 'Portada eliminada con éxito'
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.DELETE-HOME-SLIDE-BY-ID]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = deleteHomeSlideByIdService;
