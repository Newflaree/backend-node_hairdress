const { request, response } = require( 'express' );
// Services
const { createHomeSlideService } = require('../../../services/home-maintenance/home-slide');

/*
  PATH: '/api/home-slide'
*/
const createHomeSlide = async ( req = request, res = response ) => {
  const { img, title, desc, url } = req.body;

  try {
    const { statusCode, ok, msg, newHomeSlide } = await createHomeSlideService( img, title, desc, url );

    res.status( statusCode ).json({
      ok,
      msg,
      newHomeSlide
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.CREATE-HOME-SLIDE]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = createHomeSlide;
