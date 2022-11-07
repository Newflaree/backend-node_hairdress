const { request, response } = require( 'express' );
// Services

/*
  PATH: '/api/home-info/:id'
*/
const createHomeInfo = async ( req = request, res = response ) => {
  try {

    res.json({
      ok: true,
      msg: 'createHomeInfo'
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
