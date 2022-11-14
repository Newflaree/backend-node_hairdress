const { request, response } = require( 'express' );
// Services
const { updateHomeSlideByIdService } = require('../../../services/home-maintenance/home-slide');

/*
  PATH: '/api/home-slide/:id'
*/
const updateHomeSlideById = async ( req = request, res = response ) => {
  const { id } = req.params;
  const { img, title, desc, url } = req.body;

  const homeSlideData = {
    img,
    title,
    desc,
    url
  };

  try {
    const { homeSlideUpdated } = await updateHomeSlideByIdService( id, homeSlideData );

    res.json({
      ok: true,
      homeSlideUpdated
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
