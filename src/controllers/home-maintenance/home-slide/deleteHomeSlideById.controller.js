const { request, response } = require( 'express' );
// Services
const { deleteHomeSlideByIdService } = require('../../../services/home-maintenance/home-slide');

/*
  PATH: '/api/home-slide/:id'
*/
const deleteHomeSlideById = async ( req = request, res = response ) => {
  const { id } = req.params;
  try {
    const { msg } = await deleteHomeSlideByIdService( id );

    res.json({
      ok: true,
      msg
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.DELETE-HOME-SLIDE-BY-ID]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = deleteHomeSlideById;
