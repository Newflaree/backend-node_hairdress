const { request, response } = require( 'express' );
// Services
const { createHomeGalleryService } = require( '../../../services/home-maintenance/home-gallery' );

/*
  PATH: '/api/home-gallery/'
*/
const createHomeGallery = async ( req = request, res = response ) => {
  try {

    res.json({
      ok: true,
      msg: 'createHomeGallery'
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
