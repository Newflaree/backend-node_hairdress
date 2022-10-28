const { request, response } = require( 'express' );
// Services
const { updateOurServiceByIdService } = require( '../../services/our-services' );

/*
  PATH: '/api/our-services/:id'
*/
const updateOurServiceById = async ( req = request, res = response ) => {
  const { _id: uid } = req.user;
  const { id } = req.params;
  const { _id, isActive, ...productData } = req.body;

  try {

    res.json({
      ok: true,
      msg: 'updateOurServiceById'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.UPDATE-OUR-SERVICE-BY-ID]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = updateOurServiceById;
