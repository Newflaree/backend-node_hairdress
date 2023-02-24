const { request, response } = require( 'express' );
// Services
const { deleteHomeGalleryByIdService } = require( '../../../services/home-maintenance/home-gallery' );

/*
  DELETE
  SHOULD BE AUTH: TRUE
  SHOULD BE ADMIN: TRUE
  PATH: '/api/home-gallery/:id'
*/
const deleteHomeGalleryById = async ( req = request, res = response ) => {
  const { id } = req.params;

  try {
    const { msg } = await deleteHomeGalleryByIdService( id );

    res.json({
      ok: true,
      msg
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
