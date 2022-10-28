const { request, response } = require( 'express' );
// Services
const { getOurServicesCategoriesService } = require( '../../services/our-services-categories' );

/*
  PATH: '/api/our-services-categories'
*/
const getOurServicesCategories = async ( req = request, res = response ) => {
  const { limit = 5, from = 0 } = req.query;
  const query = { isActive: true };

  try {

    res.json({
      ok: true,
      msg: 'getOurServicesCategories'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-OUR-SERVICES-CATEGORIES]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = getOurServicesCategories;
