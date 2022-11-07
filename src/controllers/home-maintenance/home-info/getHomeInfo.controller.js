const { request, response } = require( 'express' );
// Services
const { getHomeInfoService } = require( '../../../services/home-maintenance/home-info' );

/*
  PATH: '/api/home-info'
*/
const getHomeInfo = async ( req = request, res = response ) => {
  try {
    const { currentHomeInfo } = await getHomeInfoService();

    res.json({
      ok: true,
      currentHomeInfo
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-HOME-INFO]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = getHomeInfo;
