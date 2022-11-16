const { request, response } = require( 'express' );
// Services
const { getHomeGalleryService } = require( '../../../services/home-maintenance/home-gallery' );

/*
  PATH: '/api/home-gallery/'
*/
const getHomeGallery = async ( req = request, res = response ) => {
  try {
    const { total, homeGallery } = await getHomeGalleryService();

    res.json({
      ok: true,
      total,
      homeGallery
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-HOME-GALLERY]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = getHomeGallery;
