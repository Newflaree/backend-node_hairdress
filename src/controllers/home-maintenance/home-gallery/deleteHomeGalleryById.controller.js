const { request, response } = require( 'express' );
// Services
const { deleteHomeGalleryByIdService } = require( '../../../services/home-maintenance/home-gallery' );

/*
  PATH: '/api/home-gallery/:id'
*/
const deleteHomeGalleryById = async ( req = request, res = response ) => {
  try {

    res.json({
      ok: true,
      msg: 'deleteHomeGalleryById'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.DELETE-HOME-GALLERY-BY-ID]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = deleteHomeGalleryById;
