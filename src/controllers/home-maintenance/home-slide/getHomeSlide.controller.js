const { request, response } = require( 'express' );
// Services
const { getHomeSlideService } = require('../../../services/home-maintenance/home-slide');

/*
  PATH: '/api/home-slide'
*/
const getHomeSlide = async ( req = request, res = response ) => {
  try {
    const { total, homeSlides } = await getHomeSlideService();

    res.json({
      ok: true,
      total,
      homeSlides
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-HOME-SLIDE]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = getHomeSlide;
