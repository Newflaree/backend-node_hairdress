const { request, response } = require( 'express' );
// Services

/*
  PATH: '/api/home-gallery/'
*/
const getHomeGallery = async ( req = request, res = response ) => {
  try {

    res.json({
      ok: true,
      msg: 'getHomeGallery'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-HOME-GALLERY]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = getHomeGallery;
