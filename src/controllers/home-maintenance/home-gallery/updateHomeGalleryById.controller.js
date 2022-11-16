const { request, response } = require( 'express' );
// Services
const { updateHomeGalleryByIdService } = require( '../../../services/home-maintenance/home-gallery' );

/*
  PATH: '/api/home-gallery/:id'
*/
const updateHomeGalleryById = async ( req = request, res = response ) => {
  try {

    res.json({
      ok: true,
      msg: 'updateHomeGalleryById'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.UPDATE-HOME-GALLERY-BY-ID]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = updateHomeGalleryById;
