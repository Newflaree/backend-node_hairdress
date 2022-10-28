// Models
const { OurServicesCategory } = require( '../../models' );

const updateOurServicesCategoryByIdService = async ( uid = '', id = '', data = {} ) => {
  const updaterData = {
    ...data,
    name: data.name.toUpperCase(),
    user: uid
  };

  try {
    const ourServicesCategoryUpdated = await OurServicesCategory.findByIdAndUpdate( id, updaterData, { new: true } )
      .populate( 'user', 'name' );


    return {
      ourServicesCategoryUpdated
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.UPDATE-OUR-SERVICES-CATEGORY-BY-ID]'.red }: Error Detail - ${ err }` );
  }
}

module.exports = updateOurServicesCategoryByIdService;
