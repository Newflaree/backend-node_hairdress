// Models
const { HomeGallery } = require( '../../../models' );

const deleteHomeGalleryByIdService = async ( req = request, res = response ) => {
  try {

  } catch ( err ) {
    console.log( `${ '[SERVICE.DELETE-HOME-GALLERY-BY-ID]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = deleteHomeGalleryByIdService;
