// Models
const { HomeGallery } = require( '../../../models' );

const getHomeGalleryService = async () => {
  const condition = {
    showOnHome: true
  };

  try {
    const [ total, homeGallery ] = await Promise.all([
      HomeGallery.countDocuments( condition ),
      HomeGallery.find( condition )
    ]);

    return {
      total,
      homeGallery
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-HOME-GALLERY]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = getHomeGalleryService;
