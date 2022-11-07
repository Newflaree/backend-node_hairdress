const { request, response } = require( 'express' );
const updateHomeInfoService = require('../../../services/home-maintenance/home-info/updateHomeInfo.service');
// Services

/*
  PATH: '/api/home-info'
*/
const updateHomeInfo = async ( req = request, res = response ) => {
  const { id } = req.params;
  const { vision, mission, about } = req.body;

  try {
    const { homeInfoUpdated } = await updateHomeInfoService( id, vision, mission, about );

    res.json({
      ok: true,
      homeInfoUpdated
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.UPDATE-HOME-INFO]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = updateHomeInfo;
