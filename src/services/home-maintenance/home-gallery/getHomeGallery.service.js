// Models
const { HomeGallery } = require( '../../../models' );

const getHomeGalleryService = async ( req = request, res = response ) => {
  try {

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-HOME-GALLERY]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = getHomeGalleryService;
