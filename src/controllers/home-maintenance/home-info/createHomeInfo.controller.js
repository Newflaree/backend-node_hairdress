const { request, response } = require( 'express' );
// Services
const { createHomeInfoService } = require( '../../../services/home-maintenance/home-info' );

/*
  PATH: '/api/home-info/:id'
*/
const createHomeInfo = async ( req = request, res = response ) => {
  const { vision, mission, about } = req.body;

  try {
    const { statusCode, ok, msg, homeInfo } = await createHomeInfoService( vision, mission, about );

    res.status( statusCode ).json({
      ok,
      msg,
      homeInfo
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.CREATE-HOME-INFO]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = createHomeInfo;
