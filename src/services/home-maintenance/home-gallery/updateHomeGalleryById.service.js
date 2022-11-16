// Models
const { HomeGallery } = require( '../../../models' );

const updateHomeGalleryByIdService = async ( id = '', img = '' ) => {
  try {
    const homeGalleryUpdated = await HomeGallery.findByIdAndUpdate( id, { img }, { new: true } );

    return {
      homeGalleryUpdated
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.UPDATE-HOME-GALLERY-BY-ID]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = updateHomeGalleryByIdService;
