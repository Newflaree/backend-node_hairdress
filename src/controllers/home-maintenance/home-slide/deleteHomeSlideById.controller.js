const { request, response } = require( 'express' );
// Services
const { deleteHomeSlideByIdService } = require('../../../services/home-maintenance/home-slide');

/*
  PATH: '/api/home-slide/:id'
*/
const deleteHomeSlideById = async ( req = request, res = response ) => {
  try {

    res.json({
      ok: true,
      msg: 'deleteHomeSlideById'
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
