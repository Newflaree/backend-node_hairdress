const { request, response } = require( 'express' );
// Services

/*
  PATH: '/api/our-services'
*/
const createOurService = async ( req = request, res = response ) => {
  const productData = req.body;
  const { _id: uid } = req.user;

  try {

    res.json({
      ok: true,
      msg: 'createOurService'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.CREATE-OUR-SERVICE]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = createOurService;
