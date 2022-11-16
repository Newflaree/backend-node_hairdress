const { request, response } = require( 'express' );
// Services
const { createHomeGalleryService } = require( '../../../services/home-maintenance/home-gallery' );

/*
  PATH: '/api/home-gallery/'
*/
const createHomeGallery = async ( req = request, res = response ) => {
  const { img } = req.body;

  try {
    const { statusCode, ok, msg, newHomeGalleryItem } = await createHomeGalleryService( img );

    res.status( statusCode ).json({
      ok,
      msg,
      newHomeGalleryItem
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.CREATE-HOME-GALLERY]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = createHomeGallery;
