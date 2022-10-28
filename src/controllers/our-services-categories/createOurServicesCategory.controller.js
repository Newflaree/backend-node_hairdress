const { request, response } = require( 'express' );
// Services
const { createOurServicesCategoryService } = require( '../../services/our-services-categories' );

/*
  PATH: '/api/our-services-categories'
*/
const createOurServicesCategory = async ( req = request, res = response ) => {
  const name = req.body.name;
  const { _id } = req.user;

  try {

    res.json({
      ok: true,
      msg: 'createOurServicesCategory'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.CREATE-OUR-SERVICES-CATEGORY]'.red }: Error Detail - ${ err }` );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin'
    });
  }
}

module.exports = createOurServicesCategory;
