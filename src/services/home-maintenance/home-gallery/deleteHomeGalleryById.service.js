// Models
const { HomeGallery } = require( '../../../models' );

const deleteHomeGalleryByIdService = async ( id = '' ) => {
  try {
    await HomeGallery.findByIdAndUpdate( id, { showOnHome: false } );

    return {
      msg: 'La imágen fue eliminada de la galería con éxito'
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.DELETE-HOME-GALLERY-BY-ID]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = deleteHomeGalleryByIdService;
