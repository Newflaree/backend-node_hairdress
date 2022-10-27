const { request, response } = require( 'express' );
// Services

/*
  PATH: '/api/our-services-categories/:id'
*/
const getOurServicesCategoryById = async ( req = request, res = response ) => {
  const { id } = req.params;

  try {

    res.json({
      ok: true,
      msg: 'getOurServicesCategoryById'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-OUR-SERVICES-CATEGORY-BY-ID]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = getOurServicesCategoryById;
