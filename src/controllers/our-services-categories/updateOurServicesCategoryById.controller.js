const { request, response } = require( 'express' );
// Services

/*
  PATH: '/api/our-services-categories/:id'
*/
const updateOurServicesCategoryById = async ( req = request, res = response ) => {
  const { _id: uid } = req.user;
  const { id } = req.params;
  const { _id, isActive, ...data } = req.body;

  try {

    res.json({
      ok: true,
      msg: 'updateOurServicesCategoryById'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.UPDATE-OUR-SERVICES-CATEGORY-BY-ID]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = updateOurServicesCategoryById;
