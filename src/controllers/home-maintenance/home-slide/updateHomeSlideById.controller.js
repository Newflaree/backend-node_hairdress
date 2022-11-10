const { request, response } = require( 'express' );
// Services
const { updateHomeSlideByIdService } = require('../../../services/home-maintenance/home-slide');

/*
  PATH: '/api/home-slide/:id'
*/
const updateHomeSlideById = async ( req = request, res = response ) => {
  try {

    res.json({
      ok: true,
      msg: 'updateHomeSlideById'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.UPDATE-HOME-SLIDE-BY-ID]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = updateHomeSlideById;
