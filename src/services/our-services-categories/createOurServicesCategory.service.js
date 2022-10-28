// Models
const { OurServicesCategory } = require( '../../models' );

const createOurServicesCategoryService = async ( name = '', uid = '' ) => {
  const ourServicesCategoryData = {
    name: name.toUpperCase(),
    user: uid.toString()
  }

  try {
    const ourServicesCategoryCreated = new OurServicesCategory( ourServicesCategoryData );

    await ourServicesCategoryCreated.save();
    
    return {
      ourServicesCategoryCreated
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.CREATE-OUR-SERVICES-CATEGORY]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = createOurServicesCategoryService;
