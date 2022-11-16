// Models
const { HomeGallery } = require( '../../../models' );

const homeGalleryIdValidation = async ( id = '' ) => {
  const homeGalleryExists = await HomeGallery.findById( id );

  if ( !homeGalleryExists || !homeGalleryExists.showOnHome ) {
    throw new Error( 'No existe una imagen en la galería con ese ID' );
  }

  return true;
}

module.exports = homeGalleryIdValidation;
