const { request, response } = require( 'express' );
// Services

/*
  PATH: '/api/home-info'
*/
const updateHomeInfo = async ( req = request, res = response ) => {
  try {

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.UPDATE-HOME-INFO]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = updateHomeInfo;
