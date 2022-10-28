const { request, response } = require( 'express' );
// Services
const { createOurServicesCategoryService } = require( '../../services/our-services-categories' );

/*
  PATH: '/api/our-services-categories'
*/
const createOurServicesCategory = async ( req = request, res = response ) => {
  const name = req.body.name;
  const { _id: uid } = req.user;

  try {
    const { ourServicesCategoryCreated } = await createOurServicesCategoryService( name, uid );

    res.json({
      ok: true,
      ourServicesCategoryCreated
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
