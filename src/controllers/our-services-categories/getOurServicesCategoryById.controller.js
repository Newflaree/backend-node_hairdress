const { request, response } = require( 'express' );
// Services
const { getOurServicesCategoryByIdService } = require( '../../services/our-services-categories' );

/*
  PATH: '/api/our-services-categories/:id'
*/
const getOurServicesCategoryById = async ( req = request, res = response ) => {
  const { id } = req.params;

  try {
    const { ourServicesCategory } = await getOurServicesCategoryByIdService( id );

    res.json({
      ok: true,
      ourServicesCategory
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
