const { request, response } = require( 'express' );
// Services

/*
  PATH: '/api/our-services-categories/:id'
*/
const deleteOurServicesCategoryById = async ( req = request, res = response ) => {
  const { id } = req.params;
  try {

    res.json({
      ok: true,
      msg: 'deleteOurServicesCategoryById'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.DELETE-OUR-SERVICES-CATEGORY-BY-ID]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = deleteOurServicesCategoryById;
